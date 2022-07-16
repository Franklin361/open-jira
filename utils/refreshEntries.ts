import entriesApi from "../apis/entriesApi";
import { Entry } from "../interfaces";

export const refreshEntries = async (callback: (entries: Entry[] | null) => void) => {
    try {
        const { data } = await entriesApi.get<Entry[]>('/entries');
        callback(data)
    } catch (error) {
        console.log(error)
        callback(null)
    }
}