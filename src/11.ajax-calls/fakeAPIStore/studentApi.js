import axios from "axios"
export const studentApi = axios.create({baseURL: "http://localhost:3001/api"})