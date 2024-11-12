import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
	base: "https://fog-3rg.pages.dev/",
	plugins: [sveltekit()],
});
