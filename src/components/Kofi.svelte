<script lang="ts">
	import { onMount } from 'svelte';

	let { name }: { name: string } = $props();

	let kofiReady = false;
	let mounted = false;

	onMount(() => {
		mounted = true;
		if (kofiReady) {
			loadKofiWidget();
		}
	});

	function kofiLoaded() {
		kofiReady = true;
		if (mounted) {
			loadKofiWidget();
		}
	}

	function loadKofiWidget() {
		window.kofiWidgetOverlay.draw(
			name,
			{
				type: 'floating-chat',
				'floating-chat.donateButton.text': 'Support me',
				'floating-chat.donateButton.background-color': '#00b9fe',
				'floating-chat.donateButton.text-color': '#fff'
			},
			'kofiContainer'
		);
	}
</script>

<svelte:head>
	<script
		type="text/javascript"
		src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
		onload={kofiLoaded}
	></script>
</svelte:head>

{#if name}
	<div id="kofiContainer" class="web-only"></div>
{/if}
