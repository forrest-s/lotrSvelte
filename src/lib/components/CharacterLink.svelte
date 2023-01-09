<script>
	export let name;
	export let birth;
	export let death;
	export let gender;
	export let hair;
	export let height;
	export let race;
	export let realm;
	export let spouse;
	export let wikiUrl;
	export let _id;
</script>

<a href="/characters/{_id}" class="character-link">
	<p>{name}</p>
	<!-- {#if birth}
      <p>Birth: {birth}</p>
    {/if}
    {#if death}
      <p>Death: {death}</p>
    {/if}
    {#if race}
      <p>Race: {race}</p>
    {/if}
    {#if realm}
      <p>Realm: {realm}</p>
    {/if} -->
</a>

<style>
	.character-link {
		border: 1px solid #ccc;
		display: flex;
		margin: 0.4rem;
		align-items: center;
		text-align: center;
		justify-content: center;
	}   
</style>
