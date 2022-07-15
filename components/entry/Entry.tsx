import { Entry } from "../../interfaces"
import { useEntryStore } from "../../store"
import { deletePost } from "../../utils"

interface Props {
    entry: Entry
}

const opts: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: 'numeric'
}

export const EntryCard = ({ entry }: Props) => {
    // TODO: too much logic for this component?
    const setIsDragging = useEntryStore(state => state.setIsDragging)
    const isDragging = useEntryStore(state => state.isDragging)
    const deleteEntry = useEntryStore(state => state.deleteEntry)

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text', entry._id)
        setIsDragging(true)
    }

    const handleDragEnd = () => setIsDragging(false)

    const handleDelete = async () => {
        // TODO:add loading
        const isDeleted = await deletePost(entry._id)
        if (isDeleted) deleteEntry(entry._id)
    }

    return (
        <div
            className={`fadeInUp transition-all ease-linear border-2 bg-black rounded my-4 p-4 cursor-pointer ${isDragging ? 'opacity-25' : 'opacity-100'} ${(entry.status == 'pending') ? 'border-secondary' : (entry.status == 'completed') ? 'border-info' : 'border-accent'}`}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <pre className="font-bold min-h-12">{entry.content}</pre>
            <div className="flex justify-between items-center mt-2">
                <button className="btn btn-sm" onClick={handleDelete}>Delete</button>
                <span className="select-none text-sm font-semibold text-white/50">{new Intl.DateTimeFormat('en', opts).format(entry.date)}</span>
            </div>

        </div>
    )
}