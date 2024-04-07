import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log: ['query'], //cada query feita ao banco de dados será mostrada
})
