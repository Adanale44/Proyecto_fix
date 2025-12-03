"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Mock usuarios para pruebas
const USERS = ["testuser@example.com"];

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();

    // Validaciones básicas
    if (!email || !password || !confirmPassword) {
      alert("Completá todos los campos");
      return;
    }
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    if (USERS.includes(email)) {
      alert("El email ya está registrado");
      return;
    }

    // Simular creación
    alert("Cuenta creada correctamente");
    router.push("/auth");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h1 className="text-2xl font-bold text-center">Crear Cuenta</h1>

        <form onSubmit={handleRegister} className="mt-6 flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            data-testid="email"
            className="border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            data-testid="password"
            className="border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirmar Contraseña"
            data-testid="password-confirm"
            className="border p-2 rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            type="submit"
            data-testid="register-submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Registrarse
          </button>
        </form>

        <p className="text-center mt-4">
          ¿Ya tenés cuenta?{" "}
          <Link href="/auth" className="text-blue-600 hover:underline">
            Iniciar Sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
