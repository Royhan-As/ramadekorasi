import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
 import Navigation from "../components/Navigation";

// Load Inter font    
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rama Dekorasi dan Ieda Zaidah Make Up",
  description:
    "Layanan dekorasi dan make up profesional untuk acara spesial Anda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
