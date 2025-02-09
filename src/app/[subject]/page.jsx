"use client";
import WeeklyCalendar from "../components/WeeklyCalendar";
import Link from "next/link";
import { useParams } from "next/navigation";

// Simulated database of subjects
const subjects = {
    biology: "Biology",
    chemistry: "Chemistry",
    physics: "Physics",
    mathematics: "Mathematics",
};

export default function SubjectPage() {
    const { subject } = useParams(); // Get subject from the dynamic route
    const subjectName = subjects[subject] || "Unknown Subject";

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6">{subjectName}</h1>
            <Link href={`/${subject}/queue`}>
                <button className="redirect-button">Ask a question</button>
            </Link>
            <WeeklyCalendar />
        </div>
    );
}
