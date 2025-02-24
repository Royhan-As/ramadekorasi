"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Dekorasi Pernikahan",
    description:
      "Menciptakan suasana romantis dan elegan untuk hari spesial Anda.",
    price: "Mulai dari Rp 5.000.000",
    icon: "💍",
  },
  {
    title: "Dekorasi Ulang Tahun",
    description: "Desain yang ceria dan menyenangkan untuk perayaan usia baru.",
    price: "Mulai dari Rp 2.000.000",
    icon: "🎉",
  },
  {
    title: "Make Up Pengantin",
    description: "Tampil cantik dan memukau di hari pernikahan Anda.",
    price: "Mulai dari Rp 3.000.000",
    icon: "👰",
  },
  {
    title: "Make Up Pesta",
    description: "Riasan yang sesuai untuk berbagai acara formal dan informal.",
    price: "Mulai dari Rp 500.000",
    icon: "💄",
  },
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center mb-12"
      >
        Layanan Kami
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden transform transition-all hover:scale-105">
              <CardHeader className="bg-gradient-to-r from-purple-400 to-pink-500 text-white">
                <div className="text-4xl mb-2">{service.icon}</div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-lg mb-4">
                  {service.description}
                </CardDescription>
                <p className="text-2xl font-semibold text-purple-600">
                  {service.price}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
