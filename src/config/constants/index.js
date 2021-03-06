require('dotenv').config();
const config = {
    YOUTUBE_API_KEY: process.env.REACT_APP_YOUTUBE_API_KEY,
    YOUTUBE_API_URL_BASE: process.env.REACT_APP_YOUTUBE_API_URL_BASE
}

module.exports = config;