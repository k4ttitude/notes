import { prisma } from "../db";
import * as trpc from "@trpc/server";
import z from "zod";
import superjson from "superjson";

export const appRouter = trpc
  .router()
  .transformer(superjson)
  .query("", {
    resolve() {
      return "Hello World!";
    },
  })
  .query("todos.list", {
    input: z.object({ ids: z.array(z.string()).optional() }),
    // output: z.array(z.object({ id: z.string(), text: z.string() })),
    resolve() {
      return prisma.note.findMany();
    },
  });

export type AppRouter = typeof appRouter;
