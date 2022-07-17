import { ContainerInputsRadio, ContainerButtonsForm } from "./"
import { Status } from "../../../interfaces"

interface PropsFormSingleEntry {
    form: { status: Status, content: string }
    isLoading: boolean
    inputRef: React.RefObject<HTMLTextAreaElement>
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    handleSubmit: (e: React.FormEvent) => void
    handleGoBack: () => void
}

export const FormSingleEntry = ({ isLoading, form, inputRef, ...events }: PropsFormSingleEntry) => {
    return (
        <form className="rounded-xl p-5 flex flex-col gap-5" onSubmit={events.handleSubmit}>

            <label htmlFor="content" className="block font-bold">If you want to update this entry, add the new  entry</label>
            <textarea
                value={form.content}
                name='content'
                ref={inputRef}
                id="content"
                placeholder="Type here"
                className=" rounded p-3 bg-neutral-focus border border-white/50 w-full resize-none block h-28"
                onChange={events.handleChange}
                disabled={isLoading}
            />


            <ContainerInputsRadio
                handleChange={events.handleChange}
                isLoading={isLoading}
                value={form.status}
            />

            <ContainerButtonsForm
                contentEntry={form.content}
                handleGoBack={events.handleGoBack}
                isLoading={isLoading}
            />
        </form>
    )
}
