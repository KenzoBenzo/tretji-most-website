export const prettifyDate = (rawDate: string) => {
	let date = new Date(rawDate);
	return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
};
