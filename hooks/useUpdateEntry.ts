import { useMemo } from "react"
import { Status } from "../interfaces"
import { useEntryStore } from "../store"
import { refreshEntries, updatePost } from "../utils"

export const useUpdateEntry = (status: Status) => {

    const listEntries = useEntryStore(state => state.listEntries)
    const updateEntry = useEntryStore(state => state.updateEntry)
    const setIsDragging = useEntryStore(state => state.setIsDragging)
    const setEntries = useEntryStore(state => state.setEntries)

    const entries = useMemo(() => listEntries ? listEntries.filter(entry => entry.status === status) : [], [listEntries])

    const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const id = e.dataTransfer.getData('text')
        let entry = listEntries?.find(list => list._id === id)

        if (entry) {
            entry.status = status
            updateEntry(entry)
        }
        setIsDragging(false)
        const entryUpdated = await updatePost({ id, status })
        if (entryUpdated === null) refreshEntries(setEntries)
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()

    return {
        entriesListIsNull: listEntries === null,
        entries,
        handleDragOver,
        handleDrop,
    }
}