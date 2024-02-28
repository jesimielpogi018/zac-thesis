interface Inputs {
	cost: number;
	salvage: number;
	rate: number;
	years: number;
	expected: number;
	mileage: number;
	lifespan: number;
}

export function calculateDDB(i: Inputs): number {
	const over: number = i.mileage ? i.mileage : i.lifespan;
	const accumulatedDepreciation = calculateAccumulatedDepreciation(i.rate / 100, i.years);
	const bookValue = calculateBookValue(i.cost, accumulatedDepreciation);

	try {
		return 2 * (i.cost / over) * bookValue;
	} catch (e) {
		console.log(e);
		return -1;
	}
}

export function outputDepreciationRate(cost: number, salvage: number, expected: number): number {
	return (cost - salvage) / expected;
}

export function calculateBookValue(cost: number, accumulatedDepreciation: number): number {
	return cost - accumulatedDepreciation;
}

export function calculateAccumulatedDepreciation(rate: number, years: number): number {
	return rate * years;
}
