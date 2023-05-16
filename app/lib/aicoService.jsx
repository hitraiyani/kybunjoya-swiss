import {AICO_API_URL, AICO_API_TOKEN} from '~/lib/const';

export async function getNews(pageSize = 4) {
    const newsResponse = await fetch(`${AICO_API_URL}news?page[number]=1&page[size]=${pageSize}&sort=-publishDate&filter[isActive]=1`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${AICO_API_TOKEN}`,
        }
    });
    return await newsResponse.json();
}