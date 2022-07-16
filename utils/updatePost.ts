import entriesApi from "../apis/entriesApi";
import { Entry } from "../interfaces";

interface Props {
    content?: string
    id: string
    status?: string
}

export const updatePost = async ({ content, id, status }: Props): Promise<Entry | null> => {
    try {

        const body = {
            ...(status ? { status } : {}),
            ...(content ? { content } : {})
        }
        const { data } = await entriesApi.put<Entry>(`/entries/${id}`, body);
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}