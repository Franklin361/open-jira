import { useMemo } from "react"
import { Status } from "../../interfaces"
import { useEntryStore } from "../../store"
import { EntryCard } from "./"

interface Props {
    status: Status
}

export const LayoutEntries = ({ status }: Props) => {

    // TODO: too much logic for this component?

    const listEntries = useEntryStore(state => state.listEntries)
    const updateEntry = useEntryStore(state => state.updateEntry)
    const setIsDragging = useEntryStore(state => state.setIsDragging)

    const entries = useMemo(() => listEntries.filter(entry => entry.status === status), [listEntries])

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const id = e.dataTransfer.getData('text')
        console.log(id, status)
        updateEntry(id, status)
        setIsDragging(false)
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className='h-full'
        >
            {
                entries.length !== 0 ? entries.map(entry => (
                    <EntryCard key={entry._id} entry={entry} />
                ))
                    : <div className={`${status === 'pending' ? 'h-2/4' : 'h-4/6'} flex justify-center items-center`}>
                        <p className="font-bold text-gray-500 text-2xl fadeInUp">
                            No entries -
                            <span className={`${(status == 'pending') ? 'text-secondary' : (status == 'completed') ? 'text-info' : 'text-accent'}`}> {status}</span>
                        </p>
                    </div>
            }
        </div>
    )
}