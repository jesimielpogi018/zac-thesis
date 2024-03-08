export function toCurrency(amount: number): string {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'PHP'
	});

	return formatter.format(amount);
}
