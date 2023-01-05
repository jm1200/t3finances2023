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
        parentCategoryId: string().optional(),
      })
    )
    .mutation(({ ctx, input }) => {
      const { prisma, session } = ctx;
      const userId = session.user.id;
      const parentCategoryId = input.parentCategoryId || null;

      return prisma.category.create({
        data: {
          name: input.name,
          userId,
          parentCategoryId,
        },
      });
    }),
});
