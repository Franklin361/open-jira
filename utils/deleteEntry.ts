import entriesApi from "../apis/entriesApi";

export const deletePost = async (id: string): Promise<boolean> => {
    try {
        await entriesApi.delete(`/entries/${id}`);
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}