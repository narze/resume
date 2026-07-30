<script lang="ts">
	import type { IProfileResp } from '../types';
	import Hideable from './Hideable.svelte';
	import Intro from './Intro.svelte';
	import Kofi from './Kofi.svelte';
	import Work from './Work.svelte';

	let { profile }: { profile: IProfileResp } = $props();

	const {
		intro = {} as IProfileResp['intro'],
		projects = [],
		technologies = [],
		workExperiences = [],
		educations = [],
		interests = [],
		resumeUrl: { sourceLink = '', fullVersionLink = '' } = {}
	} = $derived(profile || {});

	// sourceLink is empty until the profile loads; keep dataLink empty too so it
	// never becomes a bogus relative URL.
	const dataLink = $derived(sourceLink ? `${sourceLink}/blob/main/static/data/profile.json` : '');
</script>

<!-- Remove this is you does not want Kofi widget on your site -->
{#if intro.github == 'narze'}
	<Kofi name={intro.github} />
{/if}

<header class="web-only text-center p-4 sm:p-6 bg-green-400 text-white w-screen">
	<h1 class="text-4xl">Resumette</h1>
	<h3>
		<button onclick={() => window.print()} class="underline text-lg">[Print]</button>
	</h3>
	<p>
		Printer-friendly standard résumé, any HTML tags with <code>web-only</code> CSS class will be hidden
		on print.
	</p>
	<p>You can click at any sections or lines hide some information before printing.</p>
	<a href={sourceLink} target="_blank" rel="noopener">[Source]</a>
	<a href={dataLink} target="_blank" rel="noopener">[Data]</a>
</header>

<main class="text-center p-4 m-0 md:m-8 xl:mx-auto max-w-7xl">
	<Intro {...intro} />

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-4xl uppercase text-left">Technologies and Languages</h2>
			<hr />
			<ul class="text-left list-disc pl-8">
				{#each technologies as tech (tech)}
					<Hideable>
						<li>
							<div class="flex">
								<span class="w-28 flex-none">{tech.section}</span>
								<span class="flex-1">{tech.details}</span>
							</div>
						</li>
					</Hideable>
				{/each}
			</ul>
		</Hideable>
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-4xl uppercase text-left">Education</h2>
			<hr />

			<ul class="text-left list-disc pl-8">
				{#each educations as edu (edu)}
					<Hideable>
						<li>
							<strong>{edu.head}</strong>, {edu.details}
						</li>
					</Hideable>
				{/each}
			</ul>
		</Hideable>
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-4xl uppercase text-left">Work Experience</h2>
			<hr />

			{#each workExperiences as exp (exp)}
				<Work {...exp} />
			{/each}
		</Hideable>
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-4xl uppercase text-left">Projects</h2>
			<hr />

			<ul class="text-left list-disc pl-8">
				{#each projects as project (project)}
					<Hideable hide={project.hide}>
						<li>
							<strong>{project.name}</strong>
							- {project.details}
							<a href="https://{project.url}" target="_blank" rel="noreferrer"
								><strong>{project.url}</strong></a
							>
						</li>
					</Hideable>
				{/each}
			</ul>
		</Hideable>
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-4xl uppercase text-left">Interests</h2>
			<hr />

			<ul class="text-left list-disc pl-8">
				{#each interests as interest (interest)}
					<Hideable>
						<li>
							{interest}
						</li>
					</Hideable>
				{/each}
			</ul>
		</Hideable>
	</section>

	<footer class="print-only">
		(See <a href={fullVersionLink} target="_blank" rel="noopener">full version</a>
		or <a href={sourceLink} target="_blank" rel="noopener">source</a>)
	</footer>
</main>

<style lang="postcss">
	@reference "tailwindcss";

	main {
		overflow-x: hidden;
	}

	a {
		text-decoration: underline;
	}

	section {
		@apply my-4;
	}

	section h2 {
		@apply font-semibold;
	}

	section hr {
		@apply mt-0 mb-2;
		border-color: darkgrey;
	}

	:global(.print-only) {
		display: none;
	}

	@media print {
		* {
			@apply text-xs;
		}

		:global(.print-only) {
			display: inherit;
		}

		:global(.web-only) {
			display: none;
		}

		ul {
			@apply pl-6;
		}

		section {
			@apply my-2;
		}

		section hr {
			@apply mt-0 mb-1;
		}

		main {
			margin: 0 0;
			padding: 0;
		}
	}
</style>
