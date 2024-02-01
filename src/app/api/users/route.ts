import { NextResponse } from "next/server";
import { prisma } from "@lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      createdAt: true,
      updatedAt: true,
      role: true,
    },
  });

  return NextResponse.json(users);
}
