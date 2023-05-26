import * as httpRequest from '~/utils/httpRequest';

const KEY = process.env.REACT_APP_API_KEY;

export const search = async (q, part = 'snippet', maxResults = 50) => {
    try {
        const res = await httpRequest.get('search', {
            params: {
                q,
                part,
                maxResults,
                key: KEY,
            },
        });
        return res.items;
    } catch (error) {
        console.log(error);
    }
};