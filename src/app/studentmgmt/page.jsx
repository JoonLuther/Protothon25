"use client"; 
import { useState, useEffect } from "react";


export default function Management() {
  const [students, setStudents] = useState([]);
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentClasses, setNewStudentClasses] = useState("");

  // Fetch students on component mount
  useEffect(() => {
    async function fetchStudents() {
      const res = await fetch("/api/students");
      const data = await res.json();
      setStudents(data);
    }

    fetchStudents();
  }, []);

  // Handle adding a new student
  const handleAddStudent = async () => {
    const studentData = {
      name: newStudentName,
      classes: newStudentClasses.split(",").map((className) => className.trim()),
    };

    const res = await fetch("/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    });

    const newStudent = await res.json();
    setStudents((prevStudents) => [...prevStudents, newStudent]);
    setNewStudentName("");
    setNewStudentClasses("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Student Management</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Student Name"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
          className="p-2 border rounded mb-2"
        />
        <input
          type="text"
          placeholder="Classes (comma separated)"
          value={newStudentClasses}
          onChange={(e) => setNewStudentClasses(e.target.value)}
          className="p-2 border rounded mb-2"
        />
        <button
          onClick={handleAddStudent}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Student
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Student List</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id} className="mb-2">
              <strong>{student.name}</strong>: {student.classes.join(", ")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

