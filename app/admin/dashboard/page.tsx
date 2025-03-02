"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUndanganStore } from "@/lib/undanganData";

export default function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const addUndangan = useUndanganStore((state) => state.addUndangan);

  useEffect(() => {
    const checkAuth = () => {
      const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");
      if (!isAdminLoggedIn) {
        router.push("/admin/login");
      } else {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description && date && address) {
      addUndangan({ title, description, date, });
      alert("Undangan berhasil ditambahkan!");
      setTitle("");
      setDescription("");
      setDate("");
      setAddress("");
    } else {
      alert("Harap isi semua bidang!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    router.push("/admin/login");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <Card className="flex-grow">
        <CardHeader>
          <CardTitle>Tambah Undangan Baru</CardTitle>
          <CardDescription>Masukkan detail undangan baru</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="title"
                  placeholder="Judul Undangan"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Textarea
                  id="description"
                  placeholder="Deskripsi"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="address"
                  placeholder="Alamat"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            className="bg-blue-500 text-white"
            onClick={handleSubmit}
          >
            Tambah Undangan
          </Button>
          <Button
            className="bg-blue-500 text-white"
            variant="outline"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
