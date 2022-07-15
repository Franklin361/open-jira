import { useEffect } from "react"
import { useEntryStore } from "../store"
import { refreshEntries } from "../utils"

export const useInitData = () => {
    const setEntries = useEntryStore(state => state.setEntries)

    useEffect(() => {
        refreshEntries(setEntries)
    }, [])
}