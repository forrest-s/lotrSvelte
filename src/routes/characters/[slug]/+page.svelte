<script>
    import { page } from '$app/stores'
    import CharacterCard from '$lib/components/CharacterCard.svelte';
</script>
<h1>{$page.data.character.name}</h1>

<CharacterCard {...$page.data.character} />
