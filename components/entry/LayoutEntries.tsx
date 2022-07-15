import { EntryCard, NoEntries, Loading } from "../"
import { Status } from "../../interfaces"
import { useUpdateEntry } from "../../hooks"

interface Props {
    status: Status
}

export const LayoutEntries = ({ status }: Props) => {

    const { entriesListIsNull, entries, ...events } = useUpdateEntry(status)

    if (entriesListIsNull) return <Loading className="after:bg-[#272935]" status={status} />

    return (
        <div
            onDrop={events.handleDrop}
            onDragOver={events.handleDragOver}
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