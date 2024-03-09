interface Inputs {
	cost: number;
	rate: number;
	years: number;
	expected: number;
	mileage: number;
	lifespan: number;
}

export function calculateSalvageValue(i: Inputs): number {
	return i.cost * Math.pow(1 - i.rate / 100, i.years);
}


export function outputDepreciationRate(bookValue: number, salvageValue: number, expected: number): number {
	return (bookValue - salvageValue) / expected;
}

export function calculateBookValue(rate: number, cost: number, years: number): number {
	let result = cost;

	while (years > 1) {
		result -= (rate / 100) * result;

		years--;
	}

	return result;
}

export function calculateAccumulatedDepreciation(rate: number, cost: number, years: number): number {
	let result = cost;
	let depreciation = 0;

	while (years > 1) {
		result -= (rate / 100) * result;

		if (years >= 1) depreciation = (rate / 100) * result;

		years--;
	}

	return depreciation;
}
