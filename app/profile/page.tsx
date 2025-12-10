"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import pb from "@/lib/pb";

const ProfilePage = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const loggedUser = pb.authStore.model;
    if (!loggedUser) {
      router.push("/auth");  // Si no está logueado, redirige al login
    } else {
      setUser(loggedUser);
    }
  }, [router]);

  return (
    <div className="profile-page">
      {user ? (
        <div>
          <h1>Perfil de {user.email}</h1>
          <p>Email: {user.email}</p>
          <p>ID: {user.id}</p>
          {/* Aquí puedes mostrar más datos */}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ProfilePage;
