<script lang="ts">
	export let hide = false;

	const toggleHide = () => (hide = !hide);
</script>

<div class="group relative" class:web-only={hide} class:text-gray-300={hide} role="button">
	<span on:click|stopPropagation={toggleHide} class="cursor-pointer select-none">
		<slot />
	</span>
</div>
