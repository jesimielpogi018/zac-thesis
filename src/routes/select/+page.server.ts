import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { schema } from './schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod(schema));

	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(schema));

		console.log(form);

		if (!form.valid) {
			return fail(400, { form });
		}

		const arr: string[][] = [];

		arr.push(['username', form.data.username]);
		arr.push(['company', form.data.company]);

		for (const i in form.data.equipments) {
			arr.push([form.data.equipments[i], 'true']);
		}

		const url = new URLSearchParams(arr).toString();

		redirect(302, '/table?' + url);
	}
} satisfies Actions;
