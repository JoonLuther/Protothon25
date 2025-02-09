import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
        {/* Header */}
        
        <header className="bg-gray-800 text-white py-4 px-6 navbar">

          <Link href="/">
            <h1 className="text-xl font-bold">OHQ</h1>
          </Link>

          <Link href="/login">
            <h1 className="text-xl font-bold">Account</h1>
          </Link>

        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>&copy; {new Date().getFullYear()} Bryn Mawr College </p>
        </footer>
        </div>
        {/* {children} */}
      </body>
    </html>
  );
}
