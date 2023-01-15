<script>
	import CharacterLink from '$lib/components/CharacterLink.svelte';
	import { page } from '$app/stores';
    
	let allCharacters = $page.data.characters;

	const races = ['Human', 'Orc', 'Dwarf', 'Maiar', 'Ent', 'Elf', 'Hobbit', 'Uruk-hai'];
	const alphabet = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z'
	];

	let selectedRaces = []

	function filterRaces(races) {
		const filtered = $page.data.characters.filter(character => races.includes(character.race))

		return allCharacters = filtered
	}

	function filterLetter(event) {
		if (selectedRaces.length) {
			// reset selected races when filtering by letter.
			selectedRaces = []
		}

		const filtered = $page.data.characters.filter(character => character.name.startsWith(event.target.value))

		return allCharacters = filtered
	}
	function resetFilters() {
		allCharacters = $page.data.characters
		selectedRaces = []
	}
</script>

<main class="all-characters">	
	<header>
		<div>
			{#each alphabet as letter}
				<button on:click={filterLetter} type="button" value={letter}>{letter}</button>
			{/each}
		</div>
		<form>
			<!-- Checkboxes for each race -->
			{#each races as race}
				<label>
					<input bind:group={selectedRaces} type="checkbox" value={race}/>
					{race}
				</label>
			{/each}
			<button on:click={filterRaces(selectedRaces)}>Filter</button>
		</form>
		<p>Select a button to filter by the first names letter or select a few checkboxes and hit filter.</p>
		<button on:click={resetFilters}>Reset Filters</button>
	</header>

	<article class="character-links">
		{#each allCharacters as character}
			<CharacterLink
				name={character.name}
				race={character.race}
				birth={character.birth}
				death={character.death}
				gender={character.gender}
				hair={character.hair}
				height={character.height}
				realm={character.realm}
				spouse={character.spouse}
				wikiUrl={character.wikiUrl}
				_id={character._id}
			/>
		{/each}
	</article>
	<slot />
</main>

<style>
    main.all-characters {
        display: grid;
        grid-template-columns: 35% 65%;
        grid-template-rows: 15% auto;
    }

    article.character-links {
        display: flex;
        flex-direction: column;
        grid-area: 2/1/3/2;
        overflow-y: scroll;
    }

    header {
        grid-area: 1/1/2/3;
    }

	header p {
		margin: 0;
	}
</style>