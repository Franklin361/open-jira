import { useFormEntry } from "../../hooks"

export const Form = () => {

    const { inputRef, showForm, value, ...events } = useFormEntry()

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
                        />
                        <div className="flex justify-between mt-2">
                            <button
                                type="submit"
                                className="btn btn-primary btn-sm"
                                disabled={value.length <= 0}
                            >Add Entry</button>

                            <button onClick={events.handleHideForm} type="button" className="btn btn-ghost btn-sm">Cancel</button>
                        </div>
                    </>
                    : <button
                        type="button"
                        className="btn btn-block btn-secondary btn-sm"
                        onClick={events.handleShowForm}
                    > Create entry</button>
            }
        </form>
    )
}