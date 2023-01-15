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
    // const getCharacter = 'test'
    const getCharacter = await fetchData(`character/${params.slug}`)
    const getQuotes = await fetchData(`character/${params.slug}/quote`)
    const getMovies = await fetchData(`movie`)
    getCharacter.docs[0].quotes = getQuotes.docs
    getCharacter.docs[0].movies = getMovies.docs
    
    return { 
        character: getCharacter.docs[0]
    };
}