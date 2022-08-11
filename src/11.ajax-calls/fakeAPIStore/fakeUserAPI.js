import axios from "axios"

export const fakeUserApi = axios.create({
    baseURL :"https://jsonplaceholder.typicode.com/"
})