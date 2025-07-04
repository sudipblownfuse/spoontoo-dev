"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layoutComponents/Navbar";
import Footer from "@/components/layoutComponents/Footer";
import useLenis from "@/hooks/useLenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { NotificationProvider } from "@/context/NotificationContext";
import { Notifications } from "@/components/layoutComponents/Notifications";

// Load Montserrat from Google Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  useLenis();

  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat `}>
        <div className="w-full  min-h-screen h-auto flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <NotificationProvider>
              {children}
              {/* <FloatingButtons/> */}
              <Notifications />
            </NotificationProvider>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
