import { entriesApi } from "../apis";

export const deletePost = async (id: string): Promise<boolean> => {
    try {
        await entriesApi.delete(`/entries/${id}`);
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}