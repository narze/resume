<script lang="ts">
	import App from '../components/App.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: intro = data.profile.intro;
	$: pageTitle = intro.title ? `${intro.name} — ${intro.title}` : intro.name;
	$: description = intro.summary ?? `Résumé of ${intro.name}`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="profile" />
	<meta property="og:url" content={data.profile.resumeUrl.fullVersionLink} />
</svelte:head>

<App profile={data.profile} />
