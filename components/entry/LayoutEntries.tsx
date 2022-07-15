import { useMemo } from "react"
import { EntryCard, NoEntries, Loading } from "../"
import { useEntryStore } from "../../store"
import { Status } from "../../interfaces"

interface Props {
    status: Status
}

export const LayoutEntries = ({ status }: Props) => {

    // TODO: too much logic for this component?

    const listEntries = useEntryStore(state => state.listEntries)
    const updateEntry = useEntryStore(state => state.updateEntry)
    const setIsDragging = useEntryStore(state => state.setIsDragging)

    const entries = useMemo(() => listEntries ? listEntries.filter(entry => entry.status === status) : [], [listEntries])

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const id = e.dataTransfer.getData('text')
        console.log(id, status)
        updateEntry(id, status)
        setIsDragging(false)
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()

    if (listEntries === null) return <Loading status={status} />

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