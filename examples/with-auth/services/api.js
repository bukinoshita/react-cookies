// Packages
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://mockirinha-service.now.sh/mock/f7eade27-49e0-4a21-aba1-01fdd3b3fb83',
  headers: {
    Accept: 'application/json'
  }
})

api.interceptors.response.use(
  response => {
    if (response.data) {
      return response.data
    }

    return response
  },
  error => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data.error)
    }

    return Promise.reject(error)
  }
)

export default api
