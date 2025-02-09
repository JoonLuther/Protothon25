let loginDb = [
    {
        username: "jluther",
        password: "password",
        id: 1
    },
    {
        username: "aahmed1",
        password: "password",
        id: 2
    }
];
  
  export async function POST(req) {
    try {
      const { username, password } = await req.json();
  
      const user = loginDb.find(
        (u) => u.username === username && u.password === password
      );
  
      if (!user) {
        return new Response(JSON.stringify({ message: "Invalid credentials" }), {
          status: 401,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      return new Response(
        JSON.stringify({ message: "Login successful", userId: user.id }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      return new Response(JSON.stringify({ message: "Error processing request" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  