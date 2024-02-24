import type { PageServerLoad } from './$types';
import { equipments as availableEquipments } from '$lib/equipments';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { schema } from './schema';

export const load: PageServerLoad = async ({ url }) => {
	const baseForm = await superValidate(zod(schema));

	const equipmentForms: [string, typeof baseForm][] = [];

	const equipments: string[] = [];
	let username: string = '';
	let company: string = '';

	for (const [key, value] of url.searchParams.entries()) {
		if (key === 'username') username = value;
		if (key === 'company') company = value;
		if (availableEquipments.includes(key)) equipments.push(key);
	}

	for (const i in equipments) {
		const form = await superValidate(zod(schema), { id: equipments[i] });

		equipmentForms.push([equipments[i], form]);
	}

	console.log('username: ', username);
	console.log('company: ', company);
	console.log('equipments: ', equipments);
	console.log('baseForm: ', baseForm);
	console.log('equipmentForms: ', equipmentForms);

	for (const i in equipmentForms) {
		console.log(equipmentForms[i][0], equipmentForms[i][1]);
	}

	return { equipments, username, company, equipmentForms, baseForm };
};
