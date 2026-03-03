"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import pb from "@/lib/pb";
import { Card, CardContent } from "@/components/ui/card";

export default function TorneosPage() {
  const [tournaments, setTournaments] = useState<any[]>([]);

  useEffect(() => {
    const fetchTournaments = async () => {
      const result = await pb.collection("tournaments").getList(1, 50, {
        filter: "published = true",
        sort: "-created",
        expand: "creator",
      });

      setTournaments(result.items);
    };

    fetchTournaments();
  }, []);

  return (
    <div className="min-h-screen p-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center">Todos los Torneos</h1>

      {tournaments.length === 0 ? (
        <p className="text-center text-gray-500">No hay torneos publicados.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament) => (
            <Link key={tournament.id} href={`/torneos/${tournament.id}`}>
              <Card className="cursor-pointer hover:shadow-lg transition">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold">{tournament.name}</h2>
                  <p>Estado: {tournament.status}</p>
                  <p className="text-sm text-gray-500">
                    Creado por: {tournament.expand?.creator?.email}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
