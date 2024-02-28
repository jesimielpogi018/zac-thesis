export function extract(str: string, endsWith: string): string {
	const strLength = str.length;
	const l = endsWith.length + 1;

	return str.substring(0, strLength - l);
}
