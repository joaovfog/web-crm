import axios from 'axios'
import { toast } from 'react-toastify'

const api = axios.create({
    baseURL: 'http://189.112.62.2:4000',
})

api.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        const message = error.response?.data.message || error.message
        toast.error(message)
        return Promise.reject(error)
    }
)

export default api;