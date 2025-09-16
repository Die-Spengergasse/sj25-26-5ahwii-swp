import { PrismaClient } from "./prisma/client/client.ts";

// Wir instanziieren den Client genau wie in der Hauptanwendung
const prisma = new PrismaClient({
    datasources: {
        db: {
            url: Deno.env.get("DATABASE_URL"),
        },
    },
});

async function seed() {
    console.log(`Seeding...db url: ${Deno.env.get("DATABASE_URL")}`);
    const difficulties = await prisma.difficulty.findMany();
    console.log("Difficulties found: ", difficulties);
}

await seed();
console.log("Seeding finished.");
