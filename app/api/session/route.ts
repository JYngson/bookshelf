import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session = await getServerSession(authConfig);

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}
