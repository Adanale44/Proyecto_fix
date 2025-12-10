import pb from "@/lib/pb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const user = await pb.collection("users").create({
      email: data.email,
      password: data.password,
      passwordConfirm: data.password,
    });

    return NextResponse.json({ ok: true, user });
  } catch (err: any) {
    console.log("PocketBase error:", err);

    return NextResponse.json(
      {
        ok: false,
        error: err?.data || err?.message || "Unknown error",
        raw: err,
      },
      { status: 400 }
    );
  }
}
