import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { ResponseData } from '$lib/interface/ResponseData';
import type { TableData } from '$lib/interface/TableData';
import * as solve from '$lib/utils/Formulas';

export const POST: RequestHandler = async ({ request }) => {
	const body = (await request.json()) as { [key: string]: TableData };

	const res: { [key: string]: ResponseData } = {};

	for (const [key, value] of Object.entries(body)) {
		const i = {
			cost: value.cost as number,
			expected: value.expected as number,
			lifespan: value.lifespan as number,
			mileage: value.mileage as number,
			rate: value.depreciationRate as number,
			salvage: value.salvageValue as number,
			years: value.yearsInOperation as number
		};

		const accumulatedDepreciation = solve.calculateAccumulatedDepreciation(i.rate / 100, i.years);
		const bookValue = solve.calculateBookValue(i.cost, accumulatedDepreciation);
		const outputDepreciationRate = solve.outputDepreciationRate(i.cost, i.salvage, i.expected);

		res[key] = {
			DDB: solve.calculateDDB(i),
			ACCUMULATED_DEPRECIATION: accumulatedDepreciation,
			BOOK_VALUE: bookValue,
			OUTPUT_DEPRECIATION_RATE: outputDepreciationRate
		};
	}

	console.log(body);

	return json({ message: 'Working Just Fine!', data: res });
};
