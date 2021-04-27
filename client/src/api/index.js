import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const addUserToDatabase = user => api.post(`/register`, user);
export const login = loginDetails => api.post('/login', loginDetails);
export const getVenues = user_id => api.post('/venue/get', user_id);
export const checkIn = checkin => api.post('/venue/checkin', checkin)
export const analytics = venueAnalytics => api.post('/venue/stats', venueAnalytics)

const apis = {
    addUserToDatabase,
    login,
    getVenues,
    checkIn,
    analytics
}

export default apis
