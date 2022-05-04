import axios from 'axios';

const fetchUrl = 'http://lohalhost:3000/posts';

export const fetchAllPosts = () => axios.get(fetchUrl);
export const createAPI = (data) => axios.post(fetchUrl, data);
export const updateAPI = (id, data) => axios.put(`${fetchUrl}/${id}`, data);
export const deleteAPI = (id) => axios.delete(`${fetchUrl}/${id}`);