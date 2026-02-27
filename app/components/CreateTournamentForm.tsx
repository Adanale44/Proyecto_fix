"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import pb from "@/lib/pb";

type TournamentFormData = {
  name: string;
  category: string;
  description: string;
  rules: string;
  limit: string;
  startDate: string;
  endDate: string;
};

export default function CreateTournamentForm() {
  const [formData, setFormData] = useState<TournamentFormData>({
    name: "",
    category: "",
    description: "",
    rules: "",
    limit: "",
    startDate: "",
    endDate: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (Object.values(formData).some((v) => !v)) {
      return setError("Todos los campos son obligatorios");
    }

    if (Number(formData.limit) <= 0) {
      return setError("El límite debe ser mayor a 0");
    }

    if (new Date(formData.endDate) <= new Date(formData.startDate)) {
      return setError(
        "La fecha de fin no puede ser menor o igual a la de inicio",
      );
    }

    try {
      const token = pb.authStore.token;

      if (!token) {
        return setError("Debes iniciar sesión");
      }

      const res = await fetch("/api/crearTorneo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          limit: Number(formData.limit),
          startDate: new Date(formData.startDate).toISOString(),
          endDate: new Date(formData.endDate).toISOString(),
        }),
      });

      const json = await res.json();

      if (!json.ok) {
        return setError(
          typeof json.error === "string"
            ? json.error
            : json.error?.message || "Error al crear torneo",
        );
      }

      alert("Torneo creado correctamente 🔥");

      setFormData({
        name: "",
        category: "",
        description: "",
        rules: "",
        limit: "",
        startDate: "",
        endDate: "",
      });
    } catch (err) {
      console.error(err);
      setError("Error inesperado");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>Nombre del Torneo</Label>
        <Input name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div>
        <Label>Categoría</Label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border rounded p-2"
        >
          <option value="">Seleccionar categoría</option>
          <option value="Deporte">Deporte</option>
          <option value="E-Sports">E-Sports</option>
          <option value="Estrategia">Estrategia</option>
        </select>
      </div>

      <div>
        <Label>Descripción</Label>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label>Reglas</Label>
        <Textarea name="rules" value={formData.rules} onChange={handleChange} />
      </div>

      <div>
        <Label>Límite de Inscripciones</Label>
        <Input
          type="number"
          name="limit"
          value={formData.limit}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label>Fecha de Inicio</Label>
        <Input
          type="datetime-local"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label>Fecha de Fin</Label>
        <Input
          type="datetime-local"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
        />
      </div>

      {error && <p className="text-red-600">{error}</p>}

      <Button type="submit">Confirmar creación del torneo</Button>
    </form>
  );
}
