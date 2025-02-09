let studentsDb = [
    {
      id: 1,
      name: "Joon Luther",
      classes: ["Math 101", "History 102", "Science 103", "English 104"],
    },
    {
      id: 2,
      name: "Amina Ahmed",
      classes: ["Biology 201", "Chemistry 202", "Physics 203", "Literature 204", "Data Structures 205"],
    },
  ];
  
  export async function GET() {
    return new Response(JSON.stringify(studentsDb), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  
  export async function POST(req) {
    const newStudent = await req.json();
    newStudent.id = Date.now(); 
    studentsDb.push(newStudent);
  
    return new Response(JSON.stringify(newStudent), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  }
  
  export async function PUT(req) {
    const updatedStudent = await req.json();
    const index = studentsDb.findIndex((student) => student.id === updatedStudent.id);
  
    if (index === -1) {
      return new Response("Student not found", { status: 404 });
    }
  
    studentsDb[index] = updatedStudent;
    return new Response(JSON.stringify(updatedStudent), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  