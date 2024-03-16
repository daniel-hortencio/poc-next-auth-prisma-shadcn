import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("password123", 12);
  const admin = await prisma.user.upsert({
    where: { email: "admin@admin.com" },
    update: {},
    create: {
      email: "admin@admin.com",
      name: "Admin",
      password,
      role: "ADMIN",
    },
  });
  const customer = await prisma.user.upsert({
    where: { email: "customer@customer.com" },
    update: {},
    create: {
      email: "customer@customer.com",
      name: "Customer",
      password,
      role: "USER",
    },
  });
  console.log({ admin, customer });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
