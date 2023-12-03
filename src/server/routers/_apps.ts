import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

type User = {
  id: string;
  name: string;
  age: number;
};

export const appRouter = t.router({
  todoList: t.procedure.query(() => {
    const users: User[] = [
      { id: "1", name: "Mike", age: 28 },
      { id: "2", name: "Bob", age: 30 },
    ];

    return users;
  }),
});

export type AppRouter = typeof appRouter;
