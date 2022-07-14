import { Status } from "../../interfaces"
import { LayoutEntries } from "../entry"

interface Props {
    children?: JSX.Element | JSX.Element[]
    status: Status
}

export const ColumnGrid = ({ status, children }: Props) => {
    return (
        <div className="flex-1 border border-neutral-content/50 p-2 rounded-lg overflow-y-scroll">
            <div className="bg-black/50 rounded-lg p-2 text-center sticky top-0">
                <h4 className="font-bold text-accent capitalize">{status}</h4>
                {children && children}
            </div>
            <LayoutEntries status={status} />
        </div>
    )
}