import axios from 'axios';
const { YOUTUBE_API_URL_BASE, YOUTUBE_API_KEY } = require('../../config/constants');

export default axios.create({
    baseURL: YOUTUBE_API_URL_BASE,
    params: {
        part: 'snippet',
        maxResults: 5,
        key: YOUTUBE_API_KEY
    }
});
