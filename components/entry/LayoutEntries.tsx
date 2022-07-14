import { useMemo } from "react"
import { Status } from "../../interfaces"
import { useEntryStore } from "../../store"
import { EntryCard } from "./"

interface Props {
    status: Status
}

export const LayoutEntries = ({ status }: Props) => {

    const listEntries = useEntryStore(state => state.listEntries)
    const entries = useMemo(() => listEntries.filter(entry => entry.status === status), [listEntries])

    return (
        <div>
            {
                entries.length !== 0 && entries.map(entry => (
                    <EntryCard key={entry.id} entry={entry} />
                ))
            }
        </div>
    )
}