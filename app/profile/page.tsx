"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import pb from "@/lib/pb";

const ProfilePage = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const handleLogout = () => {
    pb.authStore.clear(); // Borra sesión
    setUser(null); // Limpia estado local
    router.push("/"); // Redirige al home
  };

  useEffect(() => {
    const loggedUser = pb.authStore.model;
    if (!loggedUser) {
      router.push("/auth"); // Si no está logueado, redirige al login
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

          <button
            onClick={handleLogout}
            style={{
              marginTop: "20px",
              padding: "8px 16px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ProfilePage;
