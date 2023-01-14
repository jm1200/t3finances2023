import { string, z } from "zod";
import { protectedProcedure, router } from "../trpc";

export const categoryRouter = router({
  getCategories: protectedProcedure.query(({ ctx }) => {
    const { prisma, session } = ctx;
    const userId = session.user.id;

    const categories = prisma.category.findMany({
      where: { userId, parentCategoryId: null },
      include: {
        subCategories: { where: { userId }, select: { id: true, name: true } },
      },
    });

    return categories;
  }),
  create: protectedProcedure
    .input(
      z.object({
        name: string({ required_error: "Category name is required" })
          .min(2, "Name too short.")
          .max(30, "Name too long."),
        parentCategoryId: string(),
        categoryId: string(), //for editing current category
      })
    )
    .mutation(({ ctx, input }) => {
      const { prisma, session } = ctx;
      const userId = session.user.id;
      const categoryId = input.categoryId;
      const parentCategoryId = input.parentCategoryId;

      console.log("category.ts 34 input categoryId:", categoryId);
      if (parentCategoryId) {
        return prisma.category.upsert({
          where: { id: categoryId },
          update: { name: input.name },
          create: {
            name: input.name,
            user: {
              connect: {
                id: userId,
              },
            },
            parentCategory: {
              connect: {
                id: parentCategoryId,
              },
            },
          },
        });
      } else {
        return prisma.category.upsert({
          where: { id: categoryId },
          update: { name: input.name },
          create: {
            name: input.name,
            user: {
              connect: {
                id: userId,
              },
            },
          },
        });
      }
    }),
  delete: protectedProcedure
    .input(
      z.object({
        id: string(),
      })
    )
    .mutation(({ input, ctx }) => {
      const { prisma } = ctx;

      return prisma.category.delete({
        where: { id: input.id },
      });
    }),
});
