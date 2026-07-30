import type { IProfileResp } from '../types';
import type { PageLoad } from './$types';

// Fetching in a load function (instead of onMount) lets the prerenderer inline
// the résumé content into the static HTML, so crawlers, ATS scrapers, and
// social previews see the real data instead of an empty template.
export const load: PageLoad = async ({ fetch }) => {
	const resp = await fetch('/data/profile.json');
	const profile: IProfileResp = await resp.json();

	return { profile };
};
