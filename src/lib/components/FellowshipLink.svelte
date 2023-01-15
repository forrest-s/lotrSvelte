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

<a href="/fellowship/{_id}" class="fellowship-link">
	<p>{name}</p>
</a>

<style>
	.fellowship-link {
		background-color: rgba(255, 215, 0, 0.25);
		display: flex;
		margin: 0.4rem;
		text-align: center;
		justify-content: center;
		border-radius: 50%;
		color: var(--color-text-1);
		border: 0.25rem solid rgba(255, 215, 0, 0.8);
		padding: 0.25rem;
	}   

	.fellowship-link > p {
		width: 6rem;
		height: 3.5rem;
		padding-top: 0.5rem;
	}
</style>
