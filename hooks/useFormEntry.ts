import { useEffect, useRef, useState } from "react"
import { useEntryStore } from "../store"

export const useFormEntry = () => {

    const addEntry = useEntryStore(state => state.addEntry)

    const [form, setForm] = useState('')
    const [showForm, setShowForm] = useState(false)

    const inputRef = useRef<HTMLTextAreaElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setForm(e.target.value)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        addEntry(form)
        handleHiddeForm()
    }

    const handleShowForm = () => setShowForm(true)
    const handleHiddeForm = () => {
        setForm('');
        setShowForm(false);
    }

    useEffect(() => {
        if (showForm) inputRef.current?.focus()
    }, [showForm])

    return {
        value: form,
        inputRef,
        showForm,
        handleChange,
        handleSubmit,
        handleShowForm,
        handleHiddeForm
    }
}