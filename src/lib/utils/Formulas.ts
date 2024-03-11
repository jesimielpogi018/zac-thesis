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

export function outputDepreciationRate(cost: number, salvageValue: number, expected: number): number {
	return (cost - salvageValue) / expected;
}

export function calculateBookValue(rate: number, cost: number, years: number): number {
	let result = cost;

	while (years > 1) {
		result -= (rate / 100) * result;

		years--;
	}

	return result;
}

export function calculateAccumulatedDepreciation(bookValue: number, rate: number): number {
	return bookValue * (rate / 100);
}
