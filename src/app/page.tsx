// import Image from "next/image";
import Link from "next/link";


export default function Home() {
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

