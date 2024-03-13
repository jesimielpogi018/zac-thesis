import type { PageServerLoad } from './$types';
import { equipments } from '$lib/equipments';
import type { ResponseData } from '$lib/interface/ResponseData';

export const load: PageServerLoad = async ({ url }) => {
	const bookValue = 'BOOK_VALUE';
	const salvageValue = 'SALVAGE_VALUE';
	const accumulatedDepreciation = 'ACCUMULATED_DEPRECIATION';
	const outputDepreciationRateInExpected = 'OUTPUT_DEPRECIATION_RATE_IN_EXPECTED';
	const outputDepreciationRateInMileage = 'OUTPUT_DEPRECIATION_RATE_IN_MILEAGE';

	const data: { [key: string]: ResponseData } = {};

	for (const equipment of equipments) {
		let solution: Partial<ResponseData> = {};

		for (const [key, value] of url.searchParams.entries()) {
			if (key.startsWith(equipment) && key.endsWith(salvageValue)) {
				solution = { ...solution, SALVAGE_VALUE: +value };
			}
			if (key.startsWith(equipment) && key.endsWith(bookValue)) {
				solution = { ...solution, BOOK_VALUE: +value };
			}
			if (key.startsWith(equipment) && key.endsWith(accumulatedDepreciation)) {
				solution = { ...solution, ACCUMULATED_DEPRECIATION: +value };
			}
			if (key.startsWith(equipment) && key.endsWith(outputDepreciationRateInExpected)) {
				solution = { ...solution, OUTPUT_DEPRECIATION_RATE_IN_EXPECTED: +value };
			}
			if (key.startsWith(equipment) && key.endsWith(outputDepreciationRateInMileage)) {
				solution = { ...solution, OUTPUT_DEPRECIATION_RATE_IN_MILEAGE: +value };
			}
		}

		if (Object.keys(solution).length === 0) break;

		data[equipment] = solution as ResponseData;
	}

	return { data };
};
