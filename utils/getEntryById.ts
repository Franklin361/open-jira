import { entriesApi } from "../apis";
import { Entry } from "../interfaces";

export const getEntryById = async (id: string): Promise<Entry | null> => {
    try {
        const { data } = await entriesApi.get<Entry>(`/entries/${id}`);
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}