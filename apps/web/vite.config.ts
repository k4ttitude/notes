import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import svg from "@poppanator/sveltekit-svg";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    // @ts-ignore
    svg({ includePaths: ["src/assets/icons"] }),
  ],
});
