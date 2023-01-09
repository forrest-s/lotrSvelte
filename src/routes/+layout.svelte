<script>
	// import Header from './Header.svelte';
    import Header from '$lib/components/Header.svelte'
	import '../styles.css';

	import { page } from '$app/stores';
	// console.log('home layout', $page)

	// import { onDestroy, onMount } from 'svelte'

  	// onMount(() => console.log('homepage mount', $page))
  	// onDestroy(() => console.log('Unmounted home page'))

</script>

<Header />

<slot/>

<footer>
	<p>Sourced from <a href="https://the-one-api.dev/">The-One-Api</a></p>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		grid-area: 2/2/3/3;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
