import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const addUserToDatabase = user => api.post(`/register`, user)
export const login = loginDetails => api.post('/login', loginDetails)

const apis = {
    addUserToDatabase,
    login,
}

export default apis
