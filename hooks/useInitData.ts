import { useEffect, useState } from 'react';
import { useEntryStore } from "../store"
import { refreshEntries } from "../utils"

export const useInitData = () => {
    const setEntries = useEntryStore(state => state.setEntries)
    const [errorDb, setErrorDb] = useState(false)


    useEffect(() => {
        refreshEntries().then(({ data, error }) => {
            if (error) setErrorDb(true)
            setEntries(data)
        })
    }, [])

    return errorDb
}