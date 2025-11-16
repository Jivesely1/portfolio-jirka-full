import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  console.log("Přijatá zpráva (demo):", body);

  return NextResponse.json(
    { ok: true, message: "Zpráva přijata (demo) – zde může být odesílání e-mailu." },
    { status: 200 }
  );
}
