import { appRouter } from "@/server/routers/_apps";
import {
  FetchCreateContextFnOptions,
  fetchRequestHandler,
} from "@trpc/server/adapters/fetch";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: (
      opts: FetchCreateContextFnOptions
    ): object | Promise<object> => {
      // empty context
      return {};
    },
  });

export { handler as GET, handler as POST };
