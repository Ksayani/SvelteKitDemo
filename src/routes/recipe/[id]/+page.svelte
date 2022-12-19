<script>
	  /** @type {import('./$types').PageData} */
	  export let data;
</script>

<h1 class="text-center">{data.recipe.title}</h1>

<div class="row text-center p-3">
	<div class="col-md-4">
		<img width="400" src={data.recipe.image} alt={data.recipe.title} />
	</div>
		<div class="col-md-2">
			<h2 class="font-bold">Ingredients</h2>
			{#each data.recipe.extendedIngredients as ingredient}
				<h5>{ingredient.name}</h5>
			{/each}
		</div>

		<div class="col-md-2">
			<h2 class="font-bold">Cuisines</h2>
			{#each data.recipe.cuisines as cuisines}
				<h5>{cuisines}</h5>
			{/each}
		</div>
</div>
