<script>
	import CharacterLink from '$lib/components/CharacterLink.svelte';
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
    
	let allCharacters = $page.data.characters;

	const races = ['humans', 'orcs', 'dwarves', 'maiar', 'ents', 'elves', 'hobbits', 'uruk-hai'];
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

	let search = writable('');
	let selectedRaces = writable([]);

	function updateSearch(event) {
		search.set(event.target.value);
	}

	function updateSelectedRaces(event) {
		if (event.target.checked) {
			selectedRaces.update((races) => [...races, event.target.value]);
		} else {
			selectedRaces.update((races) => races.filter((race) => race !== event.target.value));
		}
	}
</script>

<main class="all-characters">
	<header>
		<div>
			{#each alphabet as letter}
				<button type="button" value={letter}>{letter}</button>
			{/each}
		</div>

		<form>
			<!-- Checkboxes for each race -->
			{#each races as race}
				<label>
					<input type="checkbox" value={race} on:change={updateSelectedRaces} />
					{race}
				</label>
			{/each}
		</form>
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
	<section class="character-card">
		<slot />
	</section>
</main>

<style>
    main.all-characters {
        display: grid;
        grid-template-columns: 35% 65%;
        grid-template-rows: 10% auto;
    }

    section.character-card {
        overflow-y: scroll;
        grid-area: 2/2/3/3;
        align-self: center;
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
</style>