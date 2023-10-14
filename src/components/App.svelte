<script lang="ts">
	import { onMount } from 'svelte';
	import Intro from './Intro.svelte';
	import Work from './Work.svelte';
	import Kofi from './Kofi.svelte';
	import Hideable from './Hideable.svelte';
	import type { IEducation, IIntro, IProject, ITechnology, IWorkExperience } from '../types';

	let introData: IIntro = {} as IIntro;
	let projects: IProject[] = [];
	let technologies: ITechnology[] = [];
	let workExperiences: IWorkExperience[] = [];
	let educations: IEducation[] = [];
	let interests: string[] = [];
	let sourceLink: string = '';
	let fullVersionLink: string = '';

	const dataLink = `${sourceLink}/blob/main/src/data.ts`;

	onMount(async () => {
		const fetchList = [
			fetchIntroData,
			fetchProjects,
			fetchTechnologies,
			fetchWorkExperiences,
			fetchEducations,
			fetchInterests,
			fetchResumeUrl,
		];

		const [
			introResp,
			projectsResp,
			technologiesResp,
			workExperiencesResp,
			educationsResp,
			interestsResp,
			{ source = '', fullVersion = '' }
		] = await Promise.all(fetchList.map((fetch) => fetch()));

		introData = introResp;
		projects = projectsResp;
		technologies = technologiesResp;
		workExperiences = workExperiencesResp;
		educations = educationsResp;
		interests = interestsResp
		sourceLink = source
		fullVersionLink = fullVersion
	});

	async function fetchIntroData() {
		const resp = await fetch('/data/intro.json');
		return await resp.json();
	}

	async function fetchProjects() {
		const resp = await fetch('/data/projects.json');
		return await resp.json();
	}

	async function fetchTechnologies() {
		const resp = await fetch('/data/technologies.json');
		return await resp.json();
	}

	async function fetchWorkExperiences() {
		const resp = await fetch('/data/workExperiences.json');
		return await resp.json();
	}

	async function fetchEducations() {
		const resp = await fetch('/data/educations.json');
		return await resp.json();
	}

	async function fetchInterests() {
		const resp = await fetch('/data/interests.json');
		return await resp.json();
	}

	async function fetchResumeUrl() {
		const resp = await fetch('/data/resumeUrls.json');
		return await resp.json();
	}
</script>

<!-- Remove this is you does not want Kofi widget on your site -->
{#if introData.github == 'narze'}
	<Kofi name={introData.github} />
{/if}

<header class="web-only text-center p-4 sm:p-6 bg-green-400 text-white w-screen">
	<h1 class="text-4xl">Resumette</h1>
	<h3>
		<button on:click={() => window.print()} class="underline text-lg">[Print]</button>
	</h3>
	<p>
		Printer-friendly standard résumé, any HTML tags with <code>web-only</code> CSS class will be hidden
		on print.
	</p>
	<p>You can click at any sections or lines hide some information before printing.</p>
	<a href={sourceLink} target="_blank" rel="noopener">[Source]</a>
	<a href={dataLink} target="_blank" rel="noopener">[Data]</a>
</header>

<main class="text-center p-4 m-0 md:m-8 xl:mx-auto max-w-screen-xl">
	<Intro {...introData} />

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-4xl uppercase text-left">Technologies and Languages</h2>
			<hr />
			<ul class="text-left list-disc pl-8">
				{#each technologies as tech}
					<Hideable>
						<li>
							<span class="w-28 inline-block">{tech.section}</span>
							<span>{tech.details}</span>
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
				{#each educations as edu}
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

			{#each workExperiences as exp}
				<Work {...exp} />
			{/each}
		</Hideable>
	</section>

	<section>
		<Hideable>
			<h2 class="text-2xl print:text-4xl uppercase text-left">Projects</h2>
			<hr />

			<ul class="text-left list-disc pl-8">
				{#each projects as project}
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
				{#each interests as interest}
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
