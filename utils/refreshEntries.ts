import { entriesApi } from "../apis";
import { Entry } from "../interfaces";

export const refreshEntries = async (callback: (entries: Entry[]) => void) => {
    const { data } = await entriesApi.get<Entry[]>('/entries');
    callback(data)
}