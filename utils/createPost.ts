import entriesApi from "../apis/entriesApi";
import { Entry } from "../interfaces";

interface Props {
    content: string
}

export const createPost = async ({ content }: Props): Promise<Entry | null> => {
    try {
        const { data } = await entriesApi.post<Entry>('/entries', { content });
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}