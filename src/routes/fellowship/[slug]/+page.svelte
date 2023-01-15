<script>
    import { page } from '$app/stores'
    import CharacterCard from '$lib/components/CharacterCard.svelte';
</script>

<CharacterCard quotes={$page.data.character.quotes} {...$page.data.character} />
