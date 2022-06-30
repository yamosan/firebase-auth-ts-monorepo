import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "user1",
    },
  });

  const user2 = await prisma.user.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: "user2",
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
