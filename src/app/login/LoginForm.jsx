"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        // Ensure no scrolling
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";

        return () => {
            // Reset overflow when leaving the page
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        };
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null); // Reset errors

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                router.push("/dashboard"); // Redirect to dashboard on success
            } else {
                const data = await response.json();
                setError(data.message);
            }
        } catch (error) {
            setError("Something went wrong. Try again.");
        }
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
            {/* Fixed Fullscreen Background */}
            <div
                className="fixed inset-0 bg-no-repeat bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/brynmawr.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            />

            {/* Login Card */}
            <div className="relative bg-white/95 p-8 rounded-xl shadow-lg w-96 text-center border border-gray-300">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back</h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <form onSubmit={handleLogin} className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Username"
                        className="p-3 mb-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="p-3 mb-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                        Login
                    </button>
                </form>
                <p className="text-gray-700 mt-4 text-sm">
                    Don't have an account? <a href="#" className="underline text-blue-600">Sign up</a>
                </p>
            </div>
        </div>
    );
}
