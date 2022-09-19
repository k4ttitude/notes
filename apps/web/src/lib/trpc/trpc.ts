import * as trpc from "@trpc/client";
import type { AppRouter } from "@notes/server";
import superjson from "superjson";

export default trpc.createTRPCClient<AppRouter>({
  url: "http://localhost:8080/trpc",
  transformer: superjson,
});
