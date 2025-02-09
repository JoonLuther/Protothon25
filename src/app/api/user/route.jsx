import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = cookies();
    const userId = cookieStore.get("userId"); // No need to await get()

    if (!userId) {
        return new Response(JSON.stringify({ message: "Not authenticated" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response(JSON.stringify({ userId: parseInt(userId.value) }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
