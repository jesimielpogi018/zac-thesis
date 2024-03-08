import type { PageServerLoad } from './$types';
import { equipments } from '$lib/equipments';
import type { ResponseData } from '$lib/interface/ResponseData';

export const load: PageServerLoad = async ({ url }) => {
	const ddb = 'DDB';
	const bookValue = 'BOOK_VALUE';
	const salvageValue = 'SALVAGE_VALUE';
	const accumulatedDepreciation = 'ACCUMULATED_DEPRECIATION';
	const outputDepreciationRate = 'OUTPUT_DEPRECIATION_RATE';

	const data: { [key: string]: Partial<ResponseData> } = {};

	for (const equipment of equipments) {
		let solution: Partial<ResponseData> = {};

		for (const [key, value] of url.searchParams.entries()) {
			if (key.startsWith(equipment) && key.endsWith(ddb)) {
				solution = { ...solution, DDB: +value };
			}
			if (key.startsWith(equipment) && key.endsWith(salvageValue)) {
				solution = { ...solution, SALVAGE_VALUE: +value };
			}
			if (key.startsWith(equipment) && key.endsWith(bookValue)) {
				solution = { ...solution, BOOK_VALUE: +value };
			}
			if (key.startsWith(equipment) && key.endsWith(accumulatedDepreciation)) {
				solution = { ...solution, ACCUMULATED_DEPRECIATION: +value };
			}
			if (key.startsWith(equipment) && key.endsWith(outputDepreciationRate)) {
				solution = { ...solution, OUTPUT_DEPRECIATION_RATE: +value };
			}
		}

		if (Object.keys(solution).length === 0) break;

		data[equipment] = solution;
	}

	return { data };
};
