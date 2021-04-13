import axios from 'axios'

var http = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 6000,
    headers: {
        Auth: "myl4d2.tk.auth"
    }
})

export default http;