import { Status } from '../../../interfaces'

export const Loading = ({ status = 'completed', className = '' }: { status?: Status, className?: string }) => {
    return (
        <div className={`${status === 'pending' ? 'h-2/4' : 'h-4/6'} flex justify-center items-center`}>
            <div className={`spinner ${className}`}></div>
        </div>
    )
}

