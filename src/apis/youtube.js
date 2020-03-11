import axios from 'axios';

const KEY = 'AIzaSyC71R9T2VkoZSADLOQ8fF8xeP91IpxJwdM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }
});
