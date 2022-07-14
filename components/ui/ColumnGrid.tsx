import { Status } from "../../interfaces"
import { useEntryStore } from "../../store"
import { LayoutEntries } from "../entry"

interface Props {
    children?: JSX.Element | JSX.Element[]
    status: Status
}

export const ColumnGrid = ({ status, children }: Props) => {

    const isDragging = useEntryStore(state => state.isDragging)

    return (
        <div className={`transition-all ease-linear flex-1 border p-2 rounded-lg overflow-y-scroll hidden-scroll ${isDragging ? 'bg-black/70' : 'border-neutral-content/50'}`}>
            <div className="bg-black rounded p-2 text-center sticky top-0">
                <h4 className="font-bold text-accent capitalize select-none">{status}</h4>
                {children && children}
            </div>
            <LayoutEntries status={status} />
        </div>
    )
}