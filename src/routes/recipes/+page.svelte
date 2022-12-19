<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<h1 class="text-center p-3">Food Recepies</h1>

<div class="row">
	{#each data.recipes as item}
  <div class="col-md-3 text-center">
		<a href={`recipe/${item.id}`}>
			<p class="p-3">{item.title}</p>
      <img class="p-3" src={item.image} alt={item.title} />
		</a>
  </div>
	{/each}
</div>