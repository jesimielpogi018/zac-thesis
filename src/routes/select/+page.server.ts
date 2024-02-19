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

		const obj: string[][] = [];

		// TODO: Do something with the validated form.data

		obj.push(['username', form.data.username]);
		obj.push(['company', form.data.company]);

		if (form.data.excavator) obj.push(['excavator', 'true']);
		if (form.data.dump) obj.push(['dump', 'true']);
		if (form.data.backhoe) obj.push(['backhoe', 'true']);
		if (form.data.roller) obj.push(['roller', 'true']);
		if (form.data.grader) obj.push(['grader', 'true']);
		if (form.data.bulldozer) obj.push(['bulldozer', 'true']);

		const url = new URLSearchParams(obj).toString();

		redirect(302, '/table?' + url);
	}
} satisfies Actions;
