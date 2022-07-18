import axios from 'axios'

export const login = async (creds) => {
    const response = await axios.post("http://127.0.0.1:5000/login", creds, { withCredentials: true })
    return response.data
}

export const signup = async (creds) => {
    const response = await axios.post("http://127.0.0.1:5000/users", creds, { withCredentials: true })
    return response.data
}

export default {
    login,
    signup
}