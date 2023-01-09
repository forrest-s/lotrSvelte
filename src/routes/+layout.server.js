import { API_URL, LOTR_KEY } from '$env/static/private';

export async function load({ fetch, params }) {
    async function fetchData(endpoint) {
        const response = await fetch(`${API_URL}/${endpoint}`, {
            headers: {
                'Authorization': LOTR_KEY
            }
        });
        const data = await response.json();
        return data;
    }

    const getCharacters = await fetchData('character')
    const getMovies = await fetchData('movie')
    const getBooks = await fetchData('book')
    const getQuotes = await fetchData('quote')
    console.log('layout load')
    return { 
        characters: getCharacters.docs,
        movies: getMovies.docs,
        books: getBooks.docs,
        quotes: getQuotes.docs,
        test:'testing'
    };
}