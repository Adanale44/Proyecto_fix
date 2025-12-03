"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();

    // aquí podrías validar o enviar a la API, pero por ahora:
    router.push("/auth"); // REDIRECCIÓN AL LOGIN
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
          />

          <input
            type="password"
            placeholder="Contraseña"
            data-testid="password"
            className="border p-2 rounded"
          />

          <input
            type="password"
            placeholder="Confirmar Contraseña"
            data-testid="password-confirm"
            className="border p-2 rounded"
          />

          <button
            type="submit"
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
