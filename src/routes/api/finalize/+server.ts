import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { ResponseData } from '$lib/interface/ResponseData';
import type { TableData } from '$lib/interface/TableData';
import * as solve from '$lib/utils/Formulas';

export const POST: RequestHandler = async ({ request }) => {
	const body = (await request.json()) as { [key: string]: TableData };

	const res: { [key: string]: ResponseData } = {};
	const response: string[][] = [];

	for (const [key, value] of Object.entries(body)) {
		const i = {
			cost: value.cost as number,
			expected: value.expected as number,
			lifespan: value.lifespan as number,
			mileage: value.mileage as number,
			rate: value.depreciationRate as number,
			years: value.yearsInOperation as number
		};

		const salvage = solve.calculateSalvageValue(i);
		const accumulatedDepreciation = solve.calculateAccumulatedDepreciation(i.rate, i.cost, i.years);
		const bookValue = solve.calculateBookValue(i.rate, i.cost, i.years);
		const outputDepreciationRate = solve.outputDepreciationRate(bookValue, salvage, i.expected);

		console.log('accumulatedDepreciation', accumulatedDepreciation);
		console.log('salvage', salvage);
		console.log('bookValue', bookValue);
		console.log('outputDepreciationRate', outputDepreciationRate);

		res[key] = {
			SALVAGE_VALUE: salvage,
			ACCUMULATED_DEPRECIATION: accumulatedDepreciation,
			BOOK_VALUE: bookValue,
			OUTPUT_DEPRECIATION_RATE: outputDepreciationRate
		};
	}

	for (const [outerKey, outerValue] of Object.entries(res)) {
		for (const [innerKey, innerValue] of Object.entries(outerValue)) {
			response.push([`${outerKey}_${innerKey}`, innerValue]);
		}
	}

	const url = new URLSearchParams(response).toString();

	return json({ url });
};
