"use client";

"use client";

import { useEffect, useState } from "react";
import pb from "@/lib/pb";
import CreateTournamentForm from "../components/CreateTournamentForm";

export default function TournamentsPage() {
  const [mounted, setMounted] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsLogged(pb.authStore.isValid);
  }, []);

  if (!mounted) return null;

  if (!isLogged) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-600">
          Falta iniciar sesión
        </h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Crear Torneo
      </h1>
      <CreateTournamentForm />
    </div>
  );
}