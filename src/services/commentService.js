import * as httpRequest from '../utils/httpRequest';

const KEY = process.env.REACT_APP_YOUTUBE_DATA_KEY;

export const comment = async (videoId, part = 'snippet,contentDetails,statistics',textFormat = 'plainText',maxResults = 20) => {
    try {
        const res = await httpRequest.get('commentThreads', {
            params: {
                videoId,
                part,
                textFormat,
                maxResults,
                key: KEY,
            },
        });
        return res.items;
    } catch (error) {
        console.log(error);
    }
};