"use client";
import WeeklyCalendar from "../components/WeeklyCalendar";
import Link from "next/link";


export default function BiologyPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">Biology</h1>
        <Link href={"/queue"}>
            <button class="redirect-button">Ask a question</button>
        </Link>
        <WeeklyCalendar />
        </div>
    );
}
