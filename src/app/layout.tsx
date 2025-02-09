"use client"; 
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get the current route
  const showNavbar = pathname !== "/login"; // Hide navbar on login page

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">

          {/* Show Navbar only if NOT on the login page */}
          {showNavbar && (
            <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
              <Link href="/dashboard">
                <h1 className="text-xl font-bold cursor-pointer hover:text-gray-300">Dashboard</h1>
              </Link>
              <Link href="/profile">
                <h1 className="text-xl font-bold cursor-pointer hover:text-gray-300">My Profile</h1>
              </Link>
            </header>
          )}

          {/* Main Content */}
          <main className="flex-1 p-6">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-800 text-white py-4 text-center">
            <p>&copy; {new Date().getFullYear()} Bryn Mawr College</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
