import axios from "axios"

const url = 'http://79.137.204.102:8000/'
const instance = axios.create({
    baseURL: url,
})

export default instance