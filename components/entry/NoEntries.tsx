import { Status } from "../../interfaces"

export const NoEntries = ({ status }: { status: Status }) => {
    return (
        <div className={`${status === 'pending' ? 'h-2/4' : 'h-4/6'} flex justify-center items-center`}>
            <p className="font-bold text-gray-500 text-2xl text-center fadeInUp select-none">
                No entries -
                <span className={`${(status == 'pending') ? 'text-secondary' : (status == 'completed') ? 'text-info' : 'text-accent'}`}> {status}</span>
            </p>
        </div>
    )
}