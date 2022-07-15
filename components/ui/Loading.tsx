import { Status } from '../../interfaces'
import spinner from '../../styles/spinner.module.css'

export const Loading = ({ status }: { status: Status }) => {
    return (
        <div className={`${status === 'pending' ? 'h-2/4' : 'h-4/6'} flex justify-center items-center`}>
            <div className={spinner.spinner}></div>
        </div>
    )
}