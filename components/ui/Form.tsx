import { useEffect, useRef, useState } from "react"
import { useEntryStore } from "../../store"

export const Form = () => {

    const addEntry = useEntryStore(state => state.addEntry)

    const [showForm, setShowForm] = useState(false)
    const [form, setForm] = useState('')

    const inputRef = useRef<HTMLTextAreaElement>(null)

    const handleShowForm = () => setShowForm(true)
    const handleHideForm = () => { setForm(''); setShowForm(false) }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setForm(e.target.value)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        addEntry(form)
        handleHideForm()
    }

    useEffect(() => {
        if (showForm) inputRef.current?.focus()
    }, [showForm])


    return (
        <form className="mt-2" onSubmit={handleSubmit}>
            {
                showForm
                    ? <>
                        <textarea
                            className="resize-none min-h-[100px] w-full bg-neutral text-neutral-content p-2 font-semibold rounded"
                            onChange={handleChange}
                            value={form}
                            ref={inputRef}
                            placeholder='To do ...'
                        />
                        <div className="flex justify-between mt-2">
                            <button
                                type="submit"
                                className="btn btn-primary btn-sm"
                                disabled={form.length <= 0}
                            >Add Entry</button>
                            <button onClick={handleHideForm} type="button" className="btn btn-ghost btn-sm">Cancel</button>
                        </div>
                    </>
                    : <button
                        type="button"
                        className="btn btn-block btn-secondary btn-sm"
                        onClick={handleShowForm}
                    > Create entry</button>
            }
        </form>
    )
}