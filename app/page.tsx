"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}
const DynamicDecorationShowcase = dynamic(
  () => import("@/components/DecorationShowcase"),
  { ssr: false }
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full h-screen relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
        <Canvas className="absolute inset-0">
          <PerspectiveCamera
            makeDefault
            position={[0, 0, 5]}
          />
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
          />
          <DynamicDecorationShowcase />
          <OrbitControls enableZoom={false} />
        </Canvas>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div className="text-center text-white">
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-6xl font-bold mb-4 shadow-text"
            >
              Rama Dekorasi & Ieda Zaidah Make Up
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-2xl mb-8 shadow-text"
            >
              Mewujudkan Keindahan dalam Setiap Momen Spesial Anda
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <Button
                asChild
                className="mr-4 text-lg px-6 py-3 bg-white text-purple-600 hover:bg-purple-100"
              >
                <Link href="/services">Layanan Kami</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-lg px-6 py-3 border-white text-white hover:bg-white hover:text-purple-600"
              >
                <Link href="/contact">Hubungi Kami</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.section
        style={{ y }}
        className="py-24 bg-gradient-to-b from-red-100 to-purple-100 w-full"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">
            Mengapa Memilih Kami?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              title="Pengalaman"
              description="Lebih dari 10 tahun pengalaman dalam industri dekorasi dan make up."
              icon="✨"
              color="bg-pink-400"
            />
            <FeatureCard
              title="Kreativitas"
              description="Desain unik dan personal untuk setiap klien."
              icon="🎨"
              color="bg-purple-400"
            />
            <FeatureCard
              title="Profesionalisme"
              description="Tim yang berdedikasi untuk mewujudkan visi Anda."
              icon="🏆"
              color="bg-red-400"
            />
          </div>
        </div>
      </motion.section>
    </main>
  );
}

function FeatureCard({ title, description, icon, color }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${color} p-6 rounded-lg shadow-lg text-center text-white`}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

