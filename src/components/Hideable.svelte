<script lang="ts">
	import type { Snippet } from 'svelte';

	let { hide = false, children }: { hide?: boolean; children?: Snippet } = $props();

	const toggleHide = (event: Event) => {
		event.stopPropagation();
		hide = !hide;
	};

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			toggleHide(event);
		}
	};
</script>

<div class="group relative" class:web-only={hide} class:text-gray-300={hide}>
	<span
		role="button"
		tabindex="0"
		onclick={toggleHide}
		onkeydown={handleKeydown}
		class="select-none cursor-pointer"
		class:cursor-copy={hide}
	>
		{@render children?.()}
	</span>
</div>
