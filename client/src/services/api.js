import axios from 'axios';

const fetchUrl = 'http://lohalhost:3000/posts';

export const fetchAPI = () => axios.get(fetchUrl);