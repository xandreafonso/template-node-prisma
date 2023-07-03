import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient({
    log: ['query']
  });

  await prisma.author.createMany({
    data: [
      {
        name: "Alexandre",
        email: "alexandre@teste.com",
      }, {
        name: "Afonso",
        email: "afonso@teste.com",
      }
    ],
  });
}

main()
  .then(() => console.log("Seed executado."))
  .catch((e) => console.error(e));
