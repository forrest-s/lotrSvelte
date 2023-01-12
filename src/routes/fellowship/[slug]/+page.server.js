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
    console.log('character layout load', params.slug)
    return { 
        character: getCharacter.docs[0]
    };
}