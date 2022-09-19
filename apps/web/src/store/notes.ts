import { writable } from "svelte/store";
import type { InferQueryOutput } from "../lib/trpc/helpers";

export type Notes = InferQueryOutput<"todos.list">;

export default writable<Notes>([
  { id: "1", text: "hello" },
  { id: "2", text: "world" },
]);
