import axios from 'axios'

var baseUrl = 'http://localhost:3000'
const axiosService = axios.create({
  baseURL: baseUrl
})

export default axiosService
