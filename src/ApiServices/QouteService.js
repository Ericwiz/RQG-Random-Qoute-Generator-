import axios from "axios";
const apiClient = axios.create({
    baseURL: 'https://quote-garden.onrender.com/api/v3/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
        
    }
})

export default {
    getQoute() {
        const random = Math.floor(Math.random() * 72672) + 1
        return apiClient.get('quotes?limit=1' + '&page=' + random)
    },
    getAuthorQoutes(author) {
        return apiClient.get('quotes?limit=1', + '&author=' + author)
    }
}