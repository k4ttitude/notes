import { writable } from "svelte/store";
import type { InferQueryOutput } from "../lib/trpc/helpers";

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type Note = ArrayElement<InferQueryOutput<"todos.list">>;

type NotesStore = {
  notes: Note[];
  currentId: string;
};

export default writable<NotesStore>({
  notes: [
    { id: "1", text: "hello" },
    { id: "2", text: "world" },
  ],
  currentId: "1",
});
