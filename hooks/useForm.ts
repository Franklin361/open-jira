import { useRef, useState, useEffect } from 'react';

interface Props<T> {
    initialState: T,
    onSubmit: () => Promise<void>
}


export const useForm = <T>({ initialState, onSubmit }: Props<T>) => {

    const [form, setForm] = useState<T>(initialState)
    const [loading, setLoading] = useState(false)

    const inputRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let value = e.target.type === 'textarea' ? e.target.value : e.target.id
        setForm(prev => ({
            ...prev,
            [e.target.name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        await onSubmit()
        setLoading(false)
    }

    const handleResetForm = () => setForm(initialState)

    const handleChangeStateLoading = (value: boolean) => setLoading(value)

    return {
        form,
        loading,
        inputRef,
        handleSubmit,
        handleChange,
        handleResetForm,
        handleChangeStateLoading
    }
}