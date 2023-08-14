<script lang="ts">
	export let hide = false;

	const toggleHide = () => (hide = !hide);
</script>

<button class="web-only" class:text-gray-300={hide} on:click={toggleHide}
	>{hide ? '[Show]' : '[Hide]'}</button
>

<div class="inline" class:web-only={hide} class:text-gray-300={hide}>
	<slot />
</div>
