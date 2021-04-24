import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const addUserToDatabase = user => api.post(`/register`, user);
export const login = loginDetails => api.post('/login', loginDetails);
export const getVenues = user_id => api.post('/venue/get', user_id);

const apis = {
    addUserToDatabase,
    login,
    getVenues
}

export default apis
