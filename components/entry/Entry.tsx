
import { useDeleteEntry } from "../../hooks"
import { Entry } from "../../interfaces"
import { Loading } from '../ui';
import { getTimeAgo } from '../../utils/getTimeAgo';
import { useMemo } from "react";

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

    const { isDragging, isLoading, ...events } = useDeleteEntry(entry._id)

    const date = useMemo(() => getTimeAgo(entry.date), [entry.date])

    return (
        <div
            className={`fadeInUp transition-all relative ease-linear border-2 ${isLoading ? 'bg-black/50' : 'bg-black'} rounded my-4 p-4 cursor-pointer ${isDragging ? 'opacity-25' : 'opacity-100'} ${(entry.status == 'pending') ? 'border-secondary' : (entry.status == 'completed') ? 'border-info' : 'border-accent'}`}
            draggable
            onDragStart={events.handleDragStart}
            onDragEnd={events.handleDragEnd}
        >
            <pre className="font-bold whitespace-pre-wrap">{entry.content}</pre>
            <div className="mt-3  text-end">
                <span className="select-none text-sm font-semibold text-white/50">{date}</span>
                <div className="flex justify-between items-center w-full mt-2">
                    <button className="btn btn-sm" onClick={events.handleDelete} disabled={isLoading}>Delete</button>
                    <button disabled={isLoading} className="btn btn-sm" onClick={events.handleGoUpdatePage}>Update</button>
                </div>
            </div>
            {
                isLoading && <div className="absolute top-3 right-3"> <Loading className="after:bg-black w-5 h-5" /> </div>
            }
        </div>
    )
}