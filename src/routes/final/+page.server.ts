import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	for (const [key, value] of url.searchParams.entries()) {
		console.log(key, value);
	}

	return {};
};
