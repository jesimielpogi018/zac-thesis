export interface TableData<Default = number> {
	cost: number | Default;
	mileage: number | Default;
	lifespan: number | Default;
	isUsed: boolean;
	yearsInOperation: number | Default;
	depreciationRate: number | Default;
	expected: number | Default;
}
