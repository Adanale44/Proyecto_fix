import PocketBase from "pocketbase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL);

    // 🔐 Obtener token desde el header Authorization
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json(
        { ok: false, error: "No autorizado" },
        { status: 401 }
      );
    }

    const token = authHeader.replace("Bearer ", "");
    pb.authStore.save(token, null);

    const record = await pb.collection("tournaments").create({
      name: data.name,
      category: data.category,
      description: data.description,
      rules: data.rules,
      limit: Number(data.limit),
      startDate: data.startDate,
      endDate: data.endDate,
      status: "Creado",
      published: false,
    });

    return NextResponse.json({ ok: true, record });

  } catch (err: any) {
    console.error("ERROR CREAR TORNEO:", err);

    return NextResponse.json(
      {
        ok: false,
        error: err?.data?.message || err.message || "Error desconocido",
      },
      { status: 400 }
    );
  }
}