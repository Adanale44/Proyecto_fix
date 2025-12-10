import pb from "@/lib/pb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const authData = await pb.collection("users").authWithPassword(
      data.email,
      data.contrasena
    );
    return NextResponse.json({ ok: true, authData: authData, user: authData.record });
  } catch (err: any) {
    return NextResponse.json(
      {
        ok: false,
        error: err?.data?.message || err.message || "Error desconocido",
      },
      { status: 400 }
    );
  }
}
