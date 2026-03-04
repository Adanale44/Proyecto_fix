"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import pb from "@/lib/pb";
import { Card, CardContent } from "@/components/ui/card";

export default function TorneoDetallePage() {
  const { id } = useParams();
  const [tournament, setTournament] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const user = pb.authStore.model;

  useEffect(() => {
    const fetchTournament = async () => {
      try {
        const result = await pb.collection("tournaments").getOne(id as string, {
          expand: "creator",
          requestKey: null,
        });

        setTournament(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchTournament();
  }, [id]);

  // 🔥 IMPORTANTE
  if (loading) {
    return <div className="p-10">Cargando torneo...</div>;
  }

  if (!tournament) {
    return (
      <div className="p-10 text-red-500">
        El torneo no existe o fue eliminado.
      </div>
    );
  }

  // ✅ Ahora sí es seguro usar tournament
  const isParticipant = user && tournament.participants?.includes(user.id);

  const participantsCount = tournament.participants?.length || 0;
  console.log("ID recibido:", id);

  const isFull = participantsCount >= tournament.limit;

  return (
    <div className="min-h-screen p-10 bg-gray-50 flex justify-center">
      <Card className="max-w-2xl w-full">
        <CardContent className="pt-6 space-y-4">
          <h1 className="text-3xl font-bold">{tournament.name}</h1>

          <p className="text-gray-600">{tournament.description}</p>

          <div>
            <strong>Categoría:</strong> {tournament.category}
          </div>

          <div>
            <strong>Reglas:</strong>
            <p>{tournament.rules}</p>
          </div>

          <div>
            <strong>Límite:</strong> {tournament.limit}
          </div>

          <div>
            <strong>Fecha:</strong>{" "}
            {new Date(tournament.startDate).toLocaleString()}
          </div>

          <div className="text-sm text-gray-500">
            Creado por: {tournament.expand?.creator?.email}
          </div>

          {user?.id === tournament.creator && (
            <button
              onClick={async () => {
                await pb.collection("tournaments").update(tournament.id, {
                  inscriptionOpen: !tournament.inscriptionOpen,
                });
                location.reload();
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {tournament.inscriptionOpen
                ? "Cerrar inscripciones"
                : "Abrir inscripciones"}
            </button>
          )}

          <p>
            Participantes: {participantsCount} / {tournament.limit}
          </p>

          {tournament.inscriptionOpen && user && !isParticipant && !isFull && (
            <button
              onClick={async () => {
                await pb.collection("tournaments").update(tournament.id, {
                  participants: [...(tournament.participants || []), user.id],
                });

                location.reload();
              }}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Unirme al torneo
            </button>
          )}

          {tournament.inscriptionOpen && user && isParticipant && (
            <button
              onClick={async () => {
                await pb.collection("tournaments").update(tournament.id, {
                  participants: tournament.participants.filter(
                    (pid: string) => pid !== user.id,
                  ),
                });

                location.reload();
              }}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Salir del torneo
            </button>
          )}

          {isFull && (
            <p className="text-red-500 font-semibold">Torneo completo</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
