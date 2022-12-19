/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=e9d52e4e6e564bcbbf90dca3ec930061";

	const res = await fetch(url);
	const { results } = await res.json();

	if (res.ok) {
		return {
			recipes: results
		};
	}

	return {
		status: 404,
		body: { error: 'Can not fetch recepies.' }
	};
}