<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/LOTR.svg';
	import github from '$lib/images/github.svg';
    import logoBottom from '$lib/images/characters.svg'
</script>

<header>
	<section class="top">
		<a href="/">
			<img src={logo} alt="logo" />
            <img id='bottom-logo' src={logoBottom} alt='logo bottom' />
		</a>
	</section>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/fellowship' ? 'page' : undefined}>
				<a href="/fellowship">The Fellowship</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/characters') ? 'page' : undefined}>
				<a href="/characters">All Characters</a>
			</li>
		</ul>
	</nav>

	<section class="bottom">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</section>
</header>

<style>
	header {
		grid-area: 1/1/3/2;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

    .top a img{
        height: 6rem;
    }

    .top a img#bottom-logo {
        height: 3rem;
    }
    
	.bottom a{
		display: flex;
		align-items: center;
		justify-content: center;
	}

    .bottom a img {
        height: 4rem;
    }

	.top a {
        display: flex;
        flex-direction: column;
	}

	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		--background: #2A3527;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 15em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
        width: 100%;
        color: var(--color-text-2);
	}

	li[aria-current='page']::before {
		--size: 10px;
		content: '';
		width: 100%;
		height: 0;
		position: absolute;
		left: 0;
		top: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-left: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
        justify-content: flex-end;
		padding: 0 0.5rem;
		color: var(--color-text-3);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
        text-decoration: underline;
        opacity: 0.5;
	}
</style>
