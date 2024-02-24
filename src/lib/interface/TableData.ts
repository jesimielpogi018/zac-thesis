export interface TableData<Default> {
	cost: number | Default;
	mileage: number | Default;
	lifespan: number | Default;
	isUsed: boolean;
	yearsInOperation: number | Default;
	salvageValue: number | Default;
	depreciationRate: number | Default;
	expected: number | Default;
}
