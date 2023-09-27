"use client";
import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-secondaryColor min-h-screen">
          <div className="flex w-full">
            <div className="w-fit">
              <Sidebar
                isOpenSidebar={isOpenSidebar}
                setIsOpenSidebar={setIsOpenSidebar}
              />
            </div>

            <div className="flex-grow-1 flex flex-col gap-3 px-3 py-3 w-full">
              <Navbar />
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
