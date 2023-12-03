import { prisma } from "@/app/_lib/prisma";
import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const appRouter = t.router({
  getTodos: t.procedure.query(async () => {
    return await prisma.tasks.findMany();
  }),
});

export type AppRouter = typeof appRouter;
