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
  export let movies
  $: show = false
  function findMovie(movieId) {
    const movie = movies.find(each => each._id === movieId)
    return movie
  }
</script>

<section href="/characters/{_id}" class="character" style:align-self={show ? 'auto' : 'center'}>   
  <h1>{name}</h1>
  <article id='character-info'>
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
  </article>
  {#if wikiUrl}
      <a id='wiki-link' href={wikiUrl} alt='link to character wiki' target='_blank' rel="noreferrer">Character Wiki</a>
  {/if}
  {#if (quotes?.length > 1)}
      <button id='show-quotes' on:click={() => show = !show}>{show ? 'Hide Quotes' : 'Show Quotes'}</button>
      <article id='all-quotes' style:display={show ? 'block' : 'none'}>
        {#each quotes as quote}
            <span class='quote'>
              <p>{quote.dialog}</p>
              <p>{findMovie(quote.movie).name}</p>  
            </span>
        {/each}
      </article>
  {/if}
</section>
<style>
	.character {
        display: flex;
        flex-direction: column;
        margin: 0.4rem;
        align-items: center;
        text-align: center;
        border-radius: 0.5rem;
        background-color: var(--color-card-bg);
        color: var(--color-bg-1);
        padding: 1rem;
        overflow-y: scroll;
        margin-top: 1.5rem;
        box-shadow:  0px 10px 10px rgb(215 255 0 / 10%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%);
	}

  h1 {
    background-color: var(--color-card-bg);
    color: var(--color-card-headline);
    border-radius: .25rem;
    margin-top: -2.5rem;
    position: absolute;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  #character-info {
    display: grid;
    grid-template-columns: 25% 75%;
    width: 100%;
    margin: 1rem;
  }

  #character-info p {
    line-height: 0.1;
  }

  .label {
    color: var(--color-main);
    text-shadow: 0px 16px 38px var(--color-light-accent), 0px 4px 25px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2);
  }
  
  .character > article { 
    color: var(--color-dark-shade);
    background-color: var(--color-light-shade);
    border-radius: .5rem;
    box-shadow: 0 16px 38px -12px rgb(0 0 0 / 56%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%);
  }

  .character a {
      grid-column: 1/3;
      color: var(--color-dark-accent);
      background-color: var(--color-dark-shade);
      padding: 0.25rem;
      border-radius: 0.25rem;
      box-shadow:  0px 10px 10px rgb(215 255 0 / 10%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%);
  }
  .all-characters > .character-links {
    grid-area: 2/2/3/3;
  }

  .quote {
    display: grid;
    grid-template-columns: 70% 30%;
  }
</style>
