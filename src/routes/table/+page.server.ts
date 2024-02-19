import type { PageServerLoad } from './$types';

const availableEquipments = ['excavator', 'dump', 'roller', 'bulldozer', 'grader', 'backhoe'];

export const load: PageServerLoad = async ({ url }) => {
	const equipments: string[] = [];
	let username: string = '';
	let company: string = '';

	for (const [key, value] of url.searchParams.entries()) {
		if (key === 'username') username = value;
		if (key === 'company') company = value;
		if (availableEquipments.includes(key)) equipments.push(key);
	}

	return { equipments, username, company };
};
