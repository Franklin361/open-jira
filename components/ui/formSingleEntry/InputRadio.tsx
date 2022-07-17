import { Status } from "../../../interfaces"

interface PropsInputStatusItem {
    isLoading: boolean,
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    value: string
    status: Status
}

export const InputStatusItem = ({ value, isLoading, status, ...events }: PropsInputStatusItem) => {
    return (
        <label className="flex items-center gap-2 cursor-pointer">
            <input
                disabled={isLoading}
                onChange={events.handleChange}
                defaultChecked={value === status}
                type="radio"
                name="status"
                id={status}
                className="radio radio-accent" />
            <span className="capitalize">{status}</span>
        </label>
    )
}


export const ContainerInputsRadio = (props: Pick<PropsInputStatusItem, 'handleChange' | 'isLoading' | 'value'>) => {
    return (
        <>
            <label htmlFor="status" className="block font-bold">Status</label>
            <div className="flex w-full justify-start items-center gap-7 flex-wrap">
                <InputStatusItem {...props} status='completed' />
                <InputStatusItem {...props} status='pending' />
                <InputStatusItem {...props} status='progress' />
            </div>

        </>
    )
}
