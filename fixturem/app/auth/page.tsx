"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ⛔ evita que recargue la página

    // Por ahora no validamos nada.
    // Solo redirigimos al home.
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
          />
          <input
            type="password"
            placeholder="Contraseña"
            data-testid="login-password"
            className="border p-2 rounded"
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
