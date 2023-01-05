import { PrismaClient } from "@prisma/client";
import { defaultCategories } from "../data/categories";

const prisma = new PrismaClient();
async function main() {
  const { userCategories } = defaultCategories;
  const userId = "clc9cx6tt0000rd7ejdr4j1hj";

  userCategories.forEach(async (category) => {
    const { name } = category;
    let subCategories = {} as { name: string }[];
    if (category.subCategories) {
      subCategories = category.subCategories.map((name) => ({ name, userId }));
      const testCat = await prisma.category.create({
        data: {
          name,
          userId,
          subCategories: {
            create: subCategories,
          },
        },
      });

      console.log({ testCat });
    } else {
      const testCat = await prisma.category.create({
        data: {
          name,
          userId,
        },
      });

      console.log({ testCat });
    }
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
