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
    export let quotes;
    console.log('quotes', quotes)
</script>

<section href="/characters/{_id}" class="character-card">   
	{#if birth}
      <p class='label'>Birth</p><p>{birth}</p>
    {/if}
    {#if death}
      <p class='label'>Death</p><p>{death}</p>
    {/if}
    {#if race}
      <p class='label'>Race</p><p>{race}</p>
    {/if}
    {#if realm}
      <p class='label'>Realm</p><p>{realm}</p>
    {/if}
    {#if gender}
      <p class='label'>Gender</p><p>{gender}</p>
    {/if}
    {#if hair}
      <p class='label'>Hair</p><p>{hair}</p>
    {/if}
    {#if height}
      <p class='label'>Height</p><p>{height}</p>
    {/if}
    {#if spouse}
      <p class='label'>Spouse</p><p>{spouse}</p>
    {/if}
    {#if wikiUrl}
        <a href={wikiUrl} alt='link to character wiki' target='_blank' rel="noreferrer">Character Wiki</a>
    {/if}
</section>
{#if (quotes)}
    <section>
        <button>Show Quotes</button>
    </section>
{/if}
<style>
	.character-card {
		display: grid;
        grid-template-columns: 15% 85%;
		margin: 0.4rem;
		align-items: center;
		text-align: center;
        border-radius: 1rem;
        background-color: var(--color-text-2);
        color: var(--color-bg-1);
        padding: 1rem;
	}
    
    p {
        line-height: 0;
    }

    .character-card a {
        grid-column: 1/3;
    }
</style>
