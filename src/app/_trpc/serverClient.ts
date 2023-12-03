import { appRouter } from "@/server/routers/_apps";
import { httpBatchLink } from "@trpc/client";

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({url: "http://localhost:3000/api/trpc"})
  ]
});
