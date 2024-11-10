<script lang="ts">
import type { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
import { cn } from "$lib/utils.js";

const {
	ref = $bindable(null),
	class: className,
	...restProps
}: DropdownMenuPrimitive.SeparatorProps = $props();
</script>

<DropdownMenuPrimitive.Separator
	bind:ref
	class={cn("bg-muted -mx-1 my-1 h-px", className)}
	{...restProps}
/>
