import { useEffect, useState } from "react"

interface Props {
    inputRef: React.RefObject<HTMLTextAreaElement>
    handleResetForm: () => void
}

export const useShowHideForm = ({ inputRef, handleResetForm }: Props): [boolean, (e: boolean) => void] => {

    const [isShowForm, setIsShowForm] = useState(false)

    useEffect(() => {
        if (isShowForm) inputRef.current?.focus()
    }, [isShowForm])

    const handleChangeStateForm = (value: boolean) => {
        setIsShowForm(value)
        if (!value) handleResetForm()
    }

    return [
        isShowForm,
        handleChangeStateForm
    ]

}