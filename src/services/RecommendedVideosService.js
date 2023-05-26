import * as httpRequest from '../utils/httpRequest';

const KEY = process.env.REACT_APP_YOUTUBE_DATA_KEY;

export const recommendedVideos = async (videoId,channelId, part = 'snippet',maxResults = 20,) => {
    try {
        const res = await httpRequest.get('activities', {
            params: {
                videoId,
                channelId,
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