import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

// Prevent multiple instances of Prisma Client in development due to hot reloading
const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };

let prismaInstance: PrismaClient;

const connectionString = process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/ai_automation_agency?schema=public";

if (process.env.NODE_ENV === "production") {
  const pool = new pg.Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  prismaInstance = new PrismaClient({ adapter });
} else {
  if (!globalForPrisma.prisma) {
    const pool = new pg.Pool({ connectionString });
    const adapter = new PrismaPg(pool);
    globalForPrisma.prisma = new PrismaClient({ adapter });
  }
  prismaInstance = globalForPrisma.prisma;
}

export const prisma = prismaInstance;
export default prisma;
