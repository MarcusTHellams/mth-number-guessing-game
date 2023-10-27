export function getRandomIntInclusive(min: number, max: number) {
	// Ensure min and max are integers
	min = Math.ceil(min);
	max = Math.floor(max);

	// Generate and return random integer between min and max, inclusive
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getRandomInclusiveBetween1and100 = () =>
	getRandomIntInclusive(1, 100);

export const getByJsId = <T extends Element>(jsId: string) => {
	return document.querySelector<T>(`[data-jsId="${jsId}"]`);
};
