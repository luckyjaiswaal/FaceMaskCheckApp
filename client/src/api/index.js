// This file will be used to store all the function doing api calls
// All th backend calling should be registered here
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000/api', // the url will be updated to server url
})

// Example below
// export const functionName = data => api.post(`/exposed backend api url`, data)

const apis = {
  // api function
  // functionName
}

export default apis
