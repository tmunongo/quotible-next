import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.quote.createMany({
    data: [
      {
        content:
          "If you hear a voice within you saying ‘you’re no painter’, then, by all means, paint, lad, and that voice will be silenced but only by working",
        author: "Vincent Van Gogh",
        tag: "Motivational",
      },
      {
        content:
          "The wise man learns from history, the fool learns from experience",
        author: "Some Guy on Psychopass",
        tag: "Motivational",
      },
      {
        content:
          "In a higher world it is otherwise, but here below to live is to change, and to be perfect is to have changed often.",
        author: "Cardinal John Henry Newman",
        tag: "Motivational",
      },
    ],
  });
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
