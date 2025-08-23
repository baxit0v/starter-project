import axios from 'axios'

const _API_KEY = import.meta.env.VITE_API_KEY
const $authHost = axios.create({
  baseURL: _API_KEY,
})

$authHost.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  config.headers.Authorization = `Bearer ${token ?? ''}`

  return config
})

const $host = axios.create({
  baseURL: _API_KEY,
})

export { $host, $authHost }