import { useFormEntry } from "../../../hooks"
import { ButtonsForm } from "./"

export const Form = () => {

    const { inputRef, showForm, value, loading, ...events } = useFormEntry()

    return (
        <form className="mt-2" onSubmit={events.handleSubmit}>
            {
                showForm
                    ? <>
                        <textarea
                            className="resize-none min-h-[100px] w-full bg-neutral text-neutral-content p-2 font-semibold rounded"
                            onChange={events.handleChange}
                            value={value}
                            ref={inputRef}
                            placeholder='To do ...'
                            disabled={loading}
                        />
                        <ButtonsForm handleHideForm={events.handleHideForm} loading={loading} value={value} />
                    </>
                    : <button
                        type="button"
                        className="btn btn-block btn-secondary btn-sm"
                        onClick={events.handleShowForm}
                        disabled={loading}
                    > Create entry</button>
            }
        </form>
    )
}

