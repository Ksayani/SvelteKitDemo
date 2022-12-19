/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
  const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=e9d52e4e6e564bcbbf90dca3ec930061`;
  console.log(url);
  
  const res = await fetch(url);
  const data = await res.json();

  if (res.ok) {
	  return {
		   recipe: data
	  };
  }

  return {
	  status: 404,
	  body: { error: 'Can not fetch recepie.' }
  };
}