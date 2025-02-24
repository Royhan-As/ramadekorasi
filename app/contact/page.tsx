"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, MessageCircle } from "lucide-react";

export default function Contact() {
  const whatsappNumber = "+62 877-4016-5356"; // Ganti dengan nomor WhatsApp yang sebenarnya
  const facebookUrl = "https://www.facebook.com/ramadekorasi.iedazaidah"; // Ganti dengan URL Facebook yang sebenarnya
  const tiktokUrl = "https://www.tiktok.com/@ramadekorasi.iedazaidah"; // Ganti dengan URL TikTok yang sebenarnya

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center mb-12"
      >
        Hubungi Kami
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-md mx-auto"
      >
        <Card className="bg-gradient-to-br from-purple-400 to-pink-500 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Kontak Kami</CardTitle>
            <CardDescription className="text-white text-opacity-80">
              Pilih cara yang paling nyaman untuk Anda
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              className="w-full bg-green-500 hover:bg-green-600 text-white"
              onClick={() =>
                window.open(`https://wa.me/${whatsappNumber}`, "_blank")
              }
            >
              <MessageCircle className="mr-2 h-4 w-4" /> Chat WhatsApp
            </Button>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open(facebookUrl, "_blank")}
            >
              <Facebook className="mr-2 h-4 w-4" /> Facebook
            </Button>
            <Button
              className="w-full bg-black hover:bg-gray-800 text-white"
              onClick={() => window.open(tiktokUrl, "_blank")}
            >
              <svg
                className="mr-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              TikTok
            </Button>
          </CardContent>
          <CardFooter>
            <p className="text-center w-full">
              Kami siap membantu mewujudkan impian Anda!
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
