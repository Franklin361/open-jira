import { useEffect, useRef, useState } from "react"
import { useEntryStore } from "../store"
import { createPost } from "../utils"

export const useFormEntry = () => {

    const addEntry = useEntryStore(state => state.addEntry)

    const [form, setForm] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [loading, setLoading] = useState(false)

    const inputRef = useRef<HTMLTextAreaElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setForm(e.target.value)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        const entry = await createPost({ content: form })
        if (entry) {
            addEntry(entry)
            handleHideForm()
        }
        setLoading(false)
    }

    const handleShowForm = () => setShowForm(true)
    const handleHideForm = () => {
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
        loading,
        handleChange,
        handleSubmit,
        handleShowForm,
        handleHideForm
    }
}