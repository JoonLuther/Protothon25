"use client";
// import WeeklyCalendar from "./components/BiologyCalendar";
import Link from "next/link";
import { useParams } from "next/navigation";
import BiologyCalendar from "./components/WeeklyCalendar";

// Simulated database of subjects
const subjects = {
    "biology": "Biology",
    "chemistry": "Chemistry",
    "physics": "Physics",
    "literature": "Literature",
    "data-structures": "Data Structures"
};

export default function SubjectPage() {
    const { subject } = useParams(); // Get subject from the dynamic route
    console.log(subject);
    const subjectName = subjects[subject];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-6">{subjectName}</h1>
                <Link href={`/${subject}/queue`}>
                    <button className="redirect-button">Ask a question</button>
                </Link>
            </div>
            
            <BiologyCalendar />
        </div>
    );
}
