<script lang="ts">
	import Hideable from './Hideable.svelte';

	export let position: string = '';
	export let company: string = '';
	export let url: string = '';
	export let years: string[] = [];
	export let details: string[] = [];
</script>

<div class="work-experience">
	<Hideable>
		<div class="flex font-bold mb-2 print:mb-1">
			<div class="flex-1 text-left">{position}</div>
			<div class="flex-0">
				<a href={url} target="_blank" rel="noreferrer">{company}</a>
			</div>
			<div class="flex-1 text-right">{years.join('-')}</div>
		</div>
		<ul class="text-left list-disc pl-8 print:pl-6">
			{#each details as detail}
				<Hideable>
					<li>
						{detail}
					</li>
				</Hideable>
			{/each}
		</ul>
	</Hideable>
</div>

<style lang="postcss">
	.work-experience {
		@apply my-4;
	}

	a {
		text-decoration: underline;
	}

	@media print {
		.work-experience {
			@apply my-1;
		}
	}
</style>
