import * as trpc from "@trpc/server";
import z from "zod";

export const appRouter = trpc
  .router()
  .query("", {
    resolve() {
      return "Hello World!";
    },
  })
  .query("todo.get", {
    input: z.object({ ids: z.array(z.string()).optional() }),
    resolve() {
      return [];
    },
  });

export type AppRouter = typeof appRouter;
