import { writable } from "svelte/store";
import type { InferQueryOutput } from "../lib/trpc/helpers";

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type Note = ArrayElement<InferQueryOutput<"todos.list">>;

type NotesStore = {
  notes: Record<string, Note>;
  currentId: string;
};

export const NEW_ID = "new";

export default writable<NotesStore>({
  notes: {
    "1": { id: "1", text: "hello" },
    "2": { id: "2", text: "world" },
  },
  currentId: "1",
});
