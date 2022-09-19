import { writable } from "svelte/store";
import type { InferQueryOutput } from "../lib/trpc/helpers";
import trpc from "../lib/trpc/trpc";

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type Note = ArrayElement<InferQueryOutput<"todos.list">>;

type NotesStore = {
  notes: Note[];
  currentId: string;
};

const notesStore = writable<NotesStore>({
  notes: [],
  currentId: "1",
});

export default notesStore;

(async () => {
  const notes = await trpc.query("todos.list", { ids: [] });
  if (!notes.length) {
    const note: Note = {
      id: crypto.randomUUID(),
      text: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return notesStore.set({ notes: [note], currentId: note.id });
  }
  notesStore.set({ notes, currentId: notes[0].id });
})();
