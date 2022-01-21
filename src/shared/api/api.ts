import Axios from 'axios/index'

export const api = Axios.create({
  baseURL: process.env.REACT_APP_IP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(config => {
  config.params = {
    access_key: process.env.REACT_APP_IP_API_KEY,
    ...config.params
  }
  return config
})
