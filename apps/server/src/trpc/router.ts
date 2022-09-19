import * as trpc from "@trpc/server";
import z from "zod";
// import superjson from "superjson";

export const appRouter = trpc
  .router()
  .query("", {
    resolve() {
      return "Hello World!";
    },
  })
  .query("todos.list", {
    input: z.object({ ids: z.array(z.string()).optional() }),
    output: z.array(z.object({ id: z.string(), text: z.string() })),
    resolve() {
      return [{ id: "1", text: "Hello World!" }];
    },
  });
// .transformer(superjson);

export type AppRouter = typeof appRouter;
