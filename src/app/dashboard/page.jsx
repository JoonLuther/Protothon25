"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    // Prevent scrolling
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      // Reset overflow when leaving the page
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  const subjects = [
    { name: "Biology", image: "/images/bio.jpg", link: "/biology" },
    { name: "Macro Economics", image: "/images/econ.jpg", link: "/biology" },
    { name: "Data Structures", image: "/images/data.jpeg", link: "/biology" },
    { name: "Feminist Literature", image: "/images/fem.jpeg", link: "/feminist-literature" },
    { name: "Introduction to Econ", image: "/images/intro.jpg", link: "/feminist-literature" },
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full bg-gray-800 text-white py-4 px-6 flex justify-between items-center z-10">
        <Link href="/dashboard">
          <h1 className="text-xl font-bold cursor-pointer hover:text-gray-300">Dashboard</h1>
        </Link>
        <Link href="/profile">
          <h1 className="text-xl font-bold cursor-pointer hover:text-gray-300">My Profile</h1>
        </Link>
      </header>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/brynmawr.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Page Content */}
      <div className="relative flex flex-col items-center justify-center h-full w-full text-white">
        <h1 className="text-4xl font-bold mb-8">My Courses</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <Link key={index} href={subject.link} className="relative group">
              <div className="relative w-80 h-52 rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300 shadow-lg border border-gray-300">
                <img
                  src={subject.image}
                  alt={subject.name}
                  className="w-full h-full object-cover"
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition duration-300">
                  <h2 className="text-2xl font-bold text-white">{subject.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
