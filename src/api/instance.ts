import axios from "axios"

const url = 'http://localhost:8000/'
const instance = axios.create({
    baseURL: url,
})

export default instance