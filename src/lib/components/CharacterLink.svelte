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
</a>

<style>
	.character-link {
		display: flex;
		margin: 0.4rem;
		align-items: center;
		text-align: center;
		justify-content: center;
		border-radius: 0.25rem;
		border: 0.2rem solid var(--color-card-stroke);
		color: var(--color-dark-shade);
	}
	
	.character-link:hover {
		background-color: var(--color-card-highlight);
		color: var(--color-bg);
	}
</style>
