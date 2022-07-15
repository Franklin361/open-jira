import { useRouter } from "next/router"
import { useState } from "react"
import { Entry } from "../../interfaces"
import { useEntryStore } from "../../store"
import { deletePost } from "../../utils"
import { Loading } from '../ui/Loading';

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
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text', entry._id)
        setIsDragging(true)
    }

    const handleDragEnd = () => setIsDragging(false)

    const handleDelete = async () => {
        setIsLoading(() => true)
        const isDeleted = await deletePost(entry._id)
        if (isDeleted) deleteEntry(entry._id)
        setIsLoading(() => false)
    }

    const handleGoUpdatePage = () => router.push(`entries/${entry._id}`)

    return (
        <div
            className={`fadeInUp transition-all relative ease-linear border-2 ${isLoading ? 'bg-black/50' : 'bg-black'} rounded my-4 p-4 cursor-pointer ${isDragging ? 'opacity-25' : 'opacity-100'} ${(entry.status == 'pending') ? 'border-secondary' : (entry.status == 'completed') ? 'border-info' : 'border-accent'}`}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <pre className="font-bold">{entry.content}</pre>
            <div className="mt-3  text-end">
                <span className="select-none text-sm font-semibold text-white/50">{new Intl.DateTimeFormat('en', opts).format(entry.date)}</span>
                <div className="flex justify-between items-center w-full mt-2">
                    <button className="btn btn-sm" onClick={handleDelete} disabled={isLoading}>Delete</button>
                    <button disabled={isLoading} className="btn btn-sm" onClick={handleGoUpdatePage}>Update</button>
                </div>
            </div>
            {
                isLoading && <div className="absolute top-3 right-3"> <Loading className="after:bg-black w-5 h-5" /> </div>
            }
        </div>
    )
}