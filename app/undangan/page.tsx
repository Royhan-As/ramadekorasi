"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUndanganStore } from "@/lib/undanganData";

export default function UndanganPage() {
  const undangan = useUndanganStore((state) => state.undangan);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Daftar Undangan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {undangan.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>
                {new Date(item.date).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2">{item.description}</p>
              <p className="text-sm text-gray-600">
                <strong>Alamat:</strong> {item.address}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
