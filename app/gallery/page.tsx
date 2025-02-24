"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

const items: GalleryItem[] = [
  {
    id: 1,
    title: "Dekorasi Pernikahan Elegan",
    description: "Nuansa Rama Dekorasi untuk pernikahan mewah",
    price: "Rp 5.000.000",
    image: "/assets/images/1.jpg",
  },
  {
    id: 2,
    title: "Make Up Pengantin Modern",
    description: "Riasan natural dengan melati",
    price: "Rp 5.000.000",
    image: "/assets/images/14.jpg",
  },
  {
    id: 3,
    title: "Dekorasi Teras",
    description: "Tema favorit elegan di teras",
    price: "Rp 3.000.000",
    image: "/assets/images/5.jpg",
  },
  {
    id: 4,
    title: "Make Up karnaval",
    description: "Riasan karnaval untuk pawai haflatu imtihan",
    price: "Rp 2.000.000",
    image: "/assets/images/cilik.jpg",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const modalVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
};

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handleCardClick = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.h1
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
      >
        Galeri Karya Kami
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <Card
              className="overflow-hidden cursor-pointer h-full flex flex-col transition-shadow hover:shadow-xl"
              onClick={() => handleCardClick(item)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                  {item.price}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(item);
                  }}
                >
                  Lihat Detail
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white rounded-lg overflow-hidden max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
              </div>
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                  {selectedItem.title}
                </h2>
                <p className="text-gray-600 mb-4">{selectedItem.description}</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-4">
                  {selectedItem.price}
                </p>
                <div className="flex gap-4">
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    onClick={closeModal}
                  >
                    Tutup
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      // Implementasi fungsi pemesanan
                      console.log("Pesan:", selectedItem.title);
                    }}
                  >
                    Pesan Sekarang
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
