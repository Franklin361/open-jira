import { Entry } from "../../interfaces"

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
    return (
        <div className="bg-black rounded my-4 p-4">
            <pre className="font-bold min-h-12">{entry.content}</pre>
            <div className="flex justify-end mt-2">
                <span className="text-sm font-semibold text-white/50">{new Intl.DateTimeFormat('en', opts).format(entry.date)}</span>
            </div>
        </div>
    )
}