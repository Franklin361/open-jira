import { useMemo } from "react"
import { EntryCard, NoEntries, Loading } from "../"
import { useEntryStore } from "../../store"
import { Status } from "../../interfaces"
import { refreshEntries, updatePost } from "../../utils"

interface Props {
    status: Status
}

export const LayoutEntries = ({ status }: Props) => {

    // TODO: too much logic for this component?

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

    if (listEntries === null) return <Loading className="after:bg-[#272935]" status={status} />

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className='h-full'
        >
            {
                entries.length !== 0
                    ? entries.map(entry => (<EntryCard key={entry._id} entry={entry} />))
                    : <NoEntries status={status} />
            }
        </div>
    )
}