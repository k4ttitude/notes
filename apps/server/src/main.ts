import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRouter } from "./trpc/router";
import { createContext } from "./trpc/context";

const fastify = Fastify();
await fastify.register(cors, {
  origin: "*",
});

fastify.get("/ping", async () => {
  return "pong\n";
});

fastify.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: { router: appRouter, createContext },
});

fastify.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
