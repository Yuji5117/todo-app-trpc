import { prisma } from "@/app/_lib/prisma";
import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

export const appRouter = t.router({
  getTodos: t.procedure.query(async () => {
    return await prisma.tasks.findMany({
      select: {
        id: true,
        title: true,
        completed: true,
      },
    });
  }),
  getTodoById: t.procedure.input(z.number()).query(async ({ input }) => {
    return await prisma.tasks.findFirst({
      select: {
        id: true,
        title: true,
        completed: true,
      },
      where: {
        id: input,
      },
    });
  }),
});

export type AppRouter = typeof appRouter;
