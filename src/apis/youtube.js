import axios from 'axios';

const KEY = 'AIzaSyAW1dMeMofYqE0C6g713TUIIZgK0K-u5Tc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: "video",
        maxResults: 5,
        key: KEY,
    }
});