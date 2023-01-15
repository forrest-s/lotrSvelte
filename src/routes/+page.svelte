<script>
	import lotrMap from '$lib/images/MapSvg.svg'
</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Characters of the Lord of the Rings" />
</svelte:head>

<main>
	<section>
		<h1>
			Welcome
		</h1>
		
		<p>
			Uncover the details of your favorite characters from The Lord of the Rings. We
			have gathered all the information available about every character in the movie trilogy, using
			The-One-Api. Simply click on one of the links to browse all the characters or to learn
			about the nine members of the Fellowship of the Ring.
		</p>
		<p>
			This website is a comprehensive resource for exploring the world and characters of The Lord of
			the Rings. Dive into the rich mythology and lore of Middle-earth and discover more about the
			heroes and villains that populate this epic story.
		</p>
	</section>
	<img src={lotrMap} alt='lotr map'/>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: auto auto;
	}
	
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	img {
		width: 100%;
		height: 100%;
	}

	h1 {
		width: 100%;
		color: var(--color-card-headline);
		border-bottom: 0.25rem solid;
	}
</style>
