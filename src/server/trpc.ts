import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "./routers/_apps";

export const trpc = createTRPCReact<AppRouter>({});
