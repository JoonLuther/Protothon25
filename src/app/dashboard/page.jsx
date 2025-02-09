// import Image from "next/image";
import Link from "next/link";


export default function Home() {

  // get the student if logged in

  // get the student's classes

  // display students classes in a grid

  const subjects = [
    { name: "Biology", image: "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg", link: "/biology" },
    { name: "Economics", image: "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg", link: "/economics" },
    { name: "Data Structures", image: "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg", link: "/data-structures" },
    { name: "Feminist Literature", image: "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg", link: "/feminist-literature" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">My Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {subjects.map((subject, index) => (
          <Link key={index} href={subject.link}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300">
              <img src={subject.image} alt={subject.name} className="w-full h-40 object-cover" />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold">{subject.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
// "use client"; 
// import { useState, useEffect } from "react";


// export default function Home() {
//   const [students, setStudents] = useState<{ id: number; name: string; classes: string[] }[]>([]);
//   const [newStudentName, setNewStudentName] = useState("");
//   const [newStudentClasses, setNewStudentClasses] = useState("");

//   // Fetch students on component mount
//   useEffect(() => {
//     async function fetchStudents() {
//       const res = await fetch("/api/students");
//       const data = await res.json();
//       setStudents(data);
//     }

//     fetchStudents();
//   }, []);

//   // Handle adding a new student
//   const handleAddStudent = async () => {
//     const studentData = {
//       name: newStudentName,
//       classes: newStudentClasses.split(",").map((className) => className.trim()),
//     };

//     const res = await fetch("/api/students", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(studentData),
//     });

//     const newStudent = await res.json();
//     setStudents((prevStudents) => [...prevStudents, newStudent]);
//     setNewStudentName("");
//     setNewStudentClasses("");
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold mb-6">Student Management</h1>

//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Student Name"
//           value={newStudentName}
//           onChange={(e) => setNewStudentName(e.target.value)}
//           className="p-2 border rounded mb-2"
//         />
//         <input
//           type="text"
//           placeholder="Classes (comma separated)"
//           value={newStudentClasses}
//           onChange={(e) => setNewStudentClasses(e.target.value)}
//           className="p-2 border rounded mb-2"
//         />
//         <button
//           onClick={handleAddStudent}
//           className="bg-blue-500 text-white p-2 rounded"
//         >
//           Add Student
//         </button>
//       </div>

//       <div>
//         <h2 className="text-xl font-semibold mb-4">Student List</h2>
//         <ul>
//           {students.map((student) => (
//             <li key={student.id} className="mb-2">
//               <strong>{student.name}</strong>: {student.classes.join(", ")}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

