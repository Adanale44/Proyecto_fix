"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import pb from "@/lib/pb";
import CreateTournamentForm from "../components/CreateTournamentForm";

const TournamentsPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!pb.authStore.isValid) {
      router.push("/auth");
    }
  }, []);

  if (!pb.authStore.isValid) {
    return null; // evita parpadeo
  }

  return (
    <div>
      <h1>Crear Torneo</h1>
      <CreateTournamentForm />
    </div>
  );
};

export default TournamentsPage;