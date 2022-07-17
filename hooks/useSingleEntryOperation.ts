import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEntryStore } from '../store';
import { useForm } from './';
import { Entry, Status } from '../interfaces';
import { deletePost, updatePost } from '../utils';

interface StateForm {
    content: string,
    status: Status
}


export const useSingleEntryOperation = ({ _id, content, date, status }: Entry) => {


    const router = useRouter();

    const updateEntry = useEntryStore(state => state.updateEntry)
    const deleteEntry = useEntryStore(state => state.deleteEntry)

    const [messageLoading, setMessageLoading] = useState('')

    const { form, loading: isLoading, inputRef, ...eventsForm } = useForm<StateForm>({
        initialState: {
            content,
            status
        },
        onSubmit: async () => {
            setMessageLoading('Update Post ...')
            updateEntry({ _id, content: form.content, date, status: form.status })
            const isUpdated = await updatePost({ id: _id, status: form.status, content: form.content })
            if (isUpdated) router.replace('/')
        },
    })

    const handleDelete = async () => {
        setMessageLoading('Deleting Post ...')
        eventsForm.handleChangeStateLoading(true)
        deleteEntry(_id)
        const isDeleted = await deletePost(_id)
        if (isDeleted) router.replace('/')
        eventsForm.handleChangeStateLoading(false)
    }

    const handleGoBack = () => router.back()

    return {
        form,
        inputRef,
        isLoading,
        messageLoading,
        ...eventsForm,
        handleDelete,
        handleGoBack
    }
}