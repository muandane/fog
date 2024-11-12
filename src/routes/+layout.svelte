<script lang="ts">
import "../app.css";
export const prerender = true;
export const ssr = false;
const { children } = $props();
</script>

{@render children()}
