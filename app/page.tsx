"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Facebook, MessageCircle, ChevronDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Dynamic imports to avoid SSR issues with 3D components
const DynamicDecorationShowcase = dynamic(
  () => import("@/components/DecorationShowcase"),
  { ssr: false }
);

// Feature Card Component
interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
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

// Services Section
const services = [
  {
    title: "Dekorasi Pernikahan",
    description:
      "Menciptakan suasana romantis dan elegan untuk hari spesial Anda.",
    price: "Mulai dari Rp 5.000.000",
    icon: "💍",
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

// Gallery Items
interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category?: string;
}

// Dekorasi items
const dekorasiItems: GalleryItem[] = [
  {
    id: 1,
    title: "Wayang Sari",
    description: "Nuansa Putih dengan wayangnya Versi kami",
    image: "/assets/images/1.jpg",
  },
  {
    id: 2,
    title: "Dekorasi Terbaru",
    description: "pada 2023 sempat di berikan nama Rang rang mole",
    image: "/assets/images/2.jpg",
  },
  {
    id: 3,
    title: "dekorsi putih",
    description: "Si putih dengan Versi kami dan mempunyai keistimewaan",
    image: "/assets/images/3.jpg",
  },
  {
    id: 4,
    title: "Dekorasi Terbaru",
    description: "Dengan nuansa Pullong etengga",
    image: "/assets/images/4.jpg",
  },
  {
    id: 5,
    title: "Dekorasi Teras",
    description: "Dekorasi di Teras dengan Ukuran 4 meter",
    image: "/assets/images/5.jpg",
  },
  {
    id: 6,
    title: "Nuansa Terbaru",
    description: "Memberikan Nuasa terbaru lagi",
    image: "/assets/images/6.jpg",
  },
];

// Makeup items
const makeupItems: GalleryItem[] = [
  {
    id: 1,
    title: "Adat Manten Madura",
    description: "Nuansa Melati dengan adat manten madura",
    image: "/assets/images/Makeup1.jpg",
  },
  {
    id: 2,
    title: "Make Up Pengantin Modern",
    description: "Riasan natural dengan melati",
    image: "/assets/images/14.jpg",
  },
  {
    id: 3,
    title: "Adat Jawa",
    description: "Si putih dengan adat jawanya dan mempunyai keistimewaan",
    image: "/assets/images/Makeup2.jpg",
  },
  {
    id: 4,
    title: "Make Up Temangan",
    description: "Riasan Temangan dengan baju Merah maron",
    image: "/assets/images/Makeup3.jpg",
  },
  {
    id: 5,
    title: "Make Up Undangan",
    description: "Riasan dengan baju yang elegan untuk menyambut undangan",
    image: "/assets/images/Makeup4.jpg",
  },
];

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const modalVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Contact information
  const whatsappNumber = "+62 877-4016-5356";
  const facebookUrl = "https://www.facebook.com/share/153cRw961F/";
  const tiktokUrl =
    "https://www.tiktok.com/@iedazaidah_?_t=ZS-8uSCtY9KNkN&_r=1";

  const handleCardClick = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {/* Hero Section with 3D Background */}
      <motion.div
        style={{ opacity, scale }}
        className="w-full h-screen relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-red-500"
      >
        <Canvas className="absolute inset-0">
          <PerspectiveCamera
            makeDefault
            position={[0, 0, 8]}
          />
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
          />
          <DynamicDecorationShowcase />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10"
        >
          <div className="text-center text-white">
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              className="text-6xl md:text-7xl font-bold mb-4 shadow-text"
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
                className="mr-4 text-lg px-6 py-3 bg-white text-purple-600 hover:bg-purple-100"
                onClick={() => scrollToSection("services")}
              >
                Layanan Kami
              </Button>
              <Button
                variant="outline"
                className="text-lg px-6 py-3 border-white text-white hover:bg-white hover:text-purple-600"
                onClick={() => scrollToSection("contact")}
              >
                Hubungi Kami
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10"
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-white animate-bounce"
              onClick={() => scrollToSection("features")}
            >
              <ChevronDown className="h-8 w-8" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 bg-gradient-to-b from-red-100 to-purple-100 w-full"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-purple-800"
          >
            Mengapa Memilih Kami?
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <FeatureCard
                title="Pengalaman"
                description="Lebih dari 3 tahun pengalaman dalam industri dekorasi dan make up, dan sekarang menjadi kepercayaan masyarakat"
                icon="✨"
                color="bg-pink-400"
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <FeatureCard
                title="Kreativitas"
                description="Desain unik dan personal untuk setiap klien."
                icon="🎨"
                color="bg-purple-400"
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <FeatureCard
                title="Profesionalisme"
                description="Tim yang berdedikasi untuk mewujudkan visi Anda."
                icon="🏆"
                color="bg-red-400"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-white w-full"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
          >
            Layanan Kami
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden transform transition-all hover:scale-105 h-full">
                  <CardHeader className="bg-gradient-to-r from-purple-400 to-pink-500 text-white">
                    <div className="text-4xl mb-2">{service.icon}</div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 flex-grow">
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
          </motion.div>
        </div>
      </section>

      {/* Gallery Section - Dekorasi */}
      <section
        id="gallery-dekorasi"
        className="py-16 bg-gradient-to-b from-purple-50 to-pink-50 w-full"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
          >
            Galeri Rama Dekorasi
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {dekorasiItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <Card
                  className="overflow-hidden cursor-pointer h-full flex flex-col transition-shadow hover:shadow-xl"
                  onClick={() => handleCardClick(item)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2}
                    />
                  </div>
                  <CardHeader className="py-3">
                    <CardTitle className="text-xl font-bold">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0">
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
          </motion.div>
        </div>
      </section>

      {/* Gallery Section - Makeup */}
      <section
        id="gallery-makeup"
        className="py-16 bg-white w-full"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
          >
            Galeri Idha Zaidah Make Up
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {makeupItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <Card
                  className="overflow-hidden cursor-pointer h-full flex flex-col transition-shadow hover:shadow-xl"
                  onClick={() => handleCardClick(item)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2}
                    />
                  </div>
                  <CardHeader className="py-3">
                    <CardTitle className="text-xl font-bold">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0">
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
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-purple-50 to-pink-50 w-full"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
          >
            Hubungi Kami
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
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
                    window.open(
                      `https://wa.me/${whatsappNumber.replace(/\s+/g, "")}`,
                      "_blank"
                    )
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
      </section>
      <footer className="w-full py-8 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <p className="text-sm mb-2">
              &copy; {new Date().getFullYear()} Rama Collection. All rights
              reserved.
            </p>
            <p className="text-sm mb-2">
              Alamat: Jl. Campaka Rubaru, Pasongsongan, Sumenep
            </p>
            <p className="text-sm">
              Supported by{" "}
              <span className="font-semibold"> : E-Code & Rosita Audio</span>
            </p>
          </div>
        </div>
      </footer>
      {/* Gallery Modal */}
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
                  src={selectedItem.image || "/placeholder.svg"}
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
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-4"></p>
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
                      window.open(
                        `https://wa.me/${whatsappNumber.replace(
                          /\s+/g,
                          ""
                        )}?text=Saya tertarik dengan ${selectedItem.title}`,
                        "_blank"
                      );
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
    </main>
  );
}
