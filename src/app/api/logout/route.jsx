import { cookies } from "next/headers";

export async function POST() {
    const cookieStore = cookies(); // Await cookies() before modifying
    await cookieStore.delete("userId");

    return new Response(
        JSON.stringify({ message: "Logged out successfully" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );
}
