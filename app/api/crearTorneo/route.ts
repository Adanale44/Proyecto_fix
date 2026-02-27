import pb from "@/lib/pb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json(
        { ok: false, error: "No autorizado" },
        { status: 401 },
      );
    }

    const token = authHeader.replace("Bearer ", "");

    pb.authStore.clear();
    pb.authStore.save(token, null);
    await pb.collection("users").authRefresh();
    console.log("Usuario actual:", pb.authStore.model);

    if (!pb.authStore.isValid || !pb.authStore.model) {
      return NextResponse.json(
        { ok: false, error: "Token inválido" },
        { status: 401 },
      );
    }

    const record = await pb.collection("tournaments").create({
      name: data.name,
      category: data.category,
      description: data.description,
      rules: data.rules,
      limit: Number(data.limit),
      startDate: data.startDate,
      endDate: data.endDate,
      creator: pb.authStore.model.id,
      status: "abierto",
    });

    return NextResponse.json({ ok: true, record });
  } catch (err: any) {
    if (err?.response?.data?.name?.code === "validation_not_unique") {
      return NextResponse.json(
        { ok: false, error: "Ya existe un torneo con ese nombre" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { ok: false, error: err?.message || "Error del servidor" },
      { status: err.status || 400 },
    );
  }
}
