<script>
    import { page } from "$app/stores"
	import FellowshipLink from "$lib/components/FellowshipLink.svelte";

    let allCharacters = $page.data.characters
    let fellowshipIds = ['5cd99d4bde30eff6ebccfd0d', '5cd99d4bde30eff6ebccfbe6', '5cd99d4bde30eff6ebccfea0', '5cd99d4bde30eff6ebccfc7c', '5cd99d4bde30eff6ebccfe2e', '5cd99d4bde30eff6ebccfd23', '5cd99d4bde30eff6ebccfd81', '5cd99d4bde30eff6ebccfc57', '5cd99d4bde30eff6ebccfc15']
    let characters = allCharacters.filter(character => fellowshipIds.includes(character._id))
</script>

<main class='fellowship-characters'>
    <article class='fellowship-links'>
        {#each characters as character}
            <FellowshipLink
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
    <slot>
    </slot>
</main>

<style>
    main.fellowship-characters {
        display: grid;
        grid-template-rows: 35% 65%;
        grid-template-columns: 100%;	
    }

    article.fellowship-links {
        display: flex;
		align-self: center;
        overflow: scroll;
    }
</style>

