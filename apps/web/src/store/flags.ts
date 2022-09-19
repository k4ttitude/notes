import { writable } from "svelte/store";

type FlagsStore = {
  id: string;
};

export const NEW_ID = 'new'

export default writable<FlagsStore>({ id: NEW_ID });
