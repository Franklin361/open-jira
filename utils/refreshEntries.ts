import entriesApi from "../apis/entriesApi";
import { Entry } from "../interfaces";

export const refreshEntries = async (): Promise<{ error: boolean, data: Entry[] }> => {
    try {
        const { data } = await entriesApi.get<Entry[]>('/entries');
        return {
            error: false,
            data
        }
    } catch (error) {
        console.log(error)
        return {
            error: true,
            data: []
        }
    }
}