"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import pb from "@/lib/pb";

const ProfilePage = () => {
  const [user, setUser] = useState<any>(null);
  const [tournaments, setTournaments] = useState<any[]>([]);
  const router = useRouter();
  const [success, setSuccess] = useState("");

  const handleLogout = () => {
    pb.authStore.clear();
    setUser(null);
    router.push("/");
  };

  // ✅ FUNCIÓN PARA PUBLICAR
  const publishTournament = async (id: string) => {
    try {
      await pb.collection("tournaments").update(id, {
        published: true,
        status: "publicado",
      });

      setTournaments((prev) =>
        prev.map((t) =>
          t.id === id ? { ...t, published: true, status: "publicado" } : t,
        ),
      );

      setSuccess("El torneo ha sido publicado");
    } catch (error) {
      console.error("Error publicando torneo:", error);
    }
  };

  useEffect(() => {
    const loggedUser = pb.authStore.model;

    if (!loggedUser) {
      router.push("/auth");
      return;
    }

    setUser(loggedUser);

    const fetchTournaments = async () => {
      try {
        const result = await pb.collection("tournaments").getList(1, 20, {
          filter: `creator = "${loggedUser.id}"`,
          sort: "-created",
          expand: "creator",
        });

        setTournaments(result.items);
      } catch (error: any) {
        if (error?.isAbort) return;
        console.error("Error real:", error);
      }
    };

    fetchTournaments();
  }, []);

  return (
    <div className="p-6">
      {user ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Perfil de {user.email}</h1>

          <p>Email: {user.email}</p>
          <p>ID: {user.id}</p>

          <Button
            onClick={handleLogout}
            className="mt-4 bg-red-600 hover:bg-red-700"
          >
            Cerrar Sesión
          </Button>

          {/* 🔥 Mis Torneos */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Mis Torneos</h2>
            {success && (
              <p className="text-green-600 font-semibold mt-4">{success}</p>
            )}
            {tournaments.length === 0 ? (
              <p>No creaste ningún torneo todavía.</p>
            ) : (
              <div className="space-y-4">
                {tournaments.map((tournament) => (
                  <div
                    key={tournament.id}
                    className="border rounded p-4 shadow"
                  >
                    <h3 className="text-lg font-bold">{tournament.name}</h3>

                    <p>Categoría: {tournament.category}</p>
                    <p>Estado: {tournament.status}</p>
                    <p>Publicado: {tournament.published ? "Sí" : "No"}</p>

                    <p>Creado por: {tournament.expand?.creator?.email}</p>

                    <p>
                      Inicio: {new Date(tournament.startDate).toLocaleString()}
                    </p>

                    <p>Fin: {new Date(tournament.endDate).toLocaleString()}</p>

                    {/* ✅ BOTÓN SOLO SI NO ESTÁ PUBLICADO */}
                    {!tournament.published && (
                      <Button
                        onClick={() => publishTournament(tournament.id)}
                        className="mt-4 bg-blue-600 hover:bg-blue-700"
                      >
                        Publicar Torneo
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ProfilePage;
