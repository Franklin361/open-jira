import axios from "axios";

const host = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://open-jira-fml.vercel.app'

const entriesApi = axios.create({
    baseURL: `${host}/api`
})

export default entriesApi