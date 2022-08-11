import axios from "axios"

export const fakeProductStore = axios.create({baseURL: "http://localhost:3001" })