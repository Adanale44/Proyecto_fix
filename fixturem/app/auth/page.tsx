"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  // Estados para capturar el input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Credenciales mock para los tests
  const VALID_EMAIL = "testuser@example.com";
  const VALID_PASSWORD = "Password123!";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación mock para testear errores
    if (email !== VALID_EMAIL || password !== VALID_PASSWORD) {
      alert("Credenciales incorrectas");
      return;
    }

    // Si todo está ok → entrar
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h1 className="text-2xl font-bold text-center">Iniciar Sesión</h1>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            data-testid="login-email"
            className="border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            data-testid="login-password"
            className="border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Iniciar Sesión
          </button>
        </form>

        <p className="text-center mt-4">
          ¿No tenes cuenta?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
}
