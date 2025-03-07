"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Layanan", path: "/services" },
    { name: "Make Up", path: "/makeup" },
    { name: "Dekorasi", path: "/dekorasi" },
    { name: "Undangan", path: "/undangan" },
    { name: "Kontak", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-purple-600 via-pink-500 to-red-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-300"
            >
              Rama Collection
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}

              {/* Login Button with Animated Rectangle */}
              <div className="relative px-6 py-3">
                <Link
                  href="/admin/login"
                  className="text-white font-medium relative z-10"
                >
                  Login
                </Link>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full relative">
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 100 50"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <motion.rect
                        x="15"
                        y="5"
                        width="70"
                        height="40"
                        rx="6"
                        ry="6"
                        fill="transparent"
                        stroke="#1e3a8a" // Warna biru tua
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{
                          pathLength: [0, 1, 1, 1, 0],
                          pathOffset: [0, 0, 0.25, 0.5, 0.75],
                          transition: {
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          },
                        }}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded-md text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Login Button */}
          <div className="relative">
            <Link
              href="/admin/login"
              className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;
