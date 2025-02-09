"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false); // Ensure component runs on the client

  useEffect(() => {
    setIsClient(true); // Mark that we are in the client
  }, []);

  useEffect(() => {
    if (!isClient) return; // Prevent fetching before client loads

    async function fetchProfile() {
      try {
        // Get user session from API
        const userResponse = await fetch("/api/user");
        if (!userResponse.ok) {
          router.push("/login"); // Redirect to login if no user is found
          return;
        }

        const { userId } = await userResponse.json(); // Get userId from session

        // Fetch student data
        const studentResponse = await fetch("/api/students");
        const students = await studentResponse.json();

        // Find the logged-in student
        const currentStudent = students.find((s) => s.id === userId);

        if (!currentStudent) {
          router.push("/login"); // Redirect if student data is missing
          return;
        }

        setStudent(currentStudent);
      } catch (error) {
        console.error("Error fetching profile:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, [isClient, router]);

  if (!isClient || loading) return <p className="text-center mt-10">Loading profile...</p>;
  if (!student) return null; // Prevent rendering if student isn't found

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>
      <div className="bg-white shadow-lg p-6 rounded-lg w-96 text-center">
        <h2 className="text-2xl font-semibold mb-2">{student.name}</h2>
        <h3 className="text-lg font-medium text-gray-600 mb-4">Enrolled Courses:</h3>
        <ul className="text-gray-700">
          {student.classes.map((course, index) => (
            <li key={index} className="mb-2">{course}</li>
          ))}
        </ul>
        {/* Logout Button */}
        <button 
          onClick={async () => {
            await fetch("/api/logout", { method: "POST" });
            router.push("/login");
          }} 
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
