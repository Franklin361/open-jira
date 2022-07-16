import { NextPage, GetServerSideProps } from "next"
import { useRouter } from "next/router";
import { useState } from "react";
import { Loading, MainLayout } from "../../components"
import { getEntryById } from "../../database";
import { useForm } from "../../hooks"
import { Status } from '../../interfaces';
import { Entry } from '../../interfaces/entry';
import { useEntryStore } from "../../store";
import { deletePost, updatePost } from "../../utils";

interface StateForm {
    content: string,
    status: Status
}

// TODO: REFACTOR this component
// TODO: REFACTOR this logic in this component

const SingleEntry: NextPage<Entry> = ({ _id, content, date, status }) => {

    const router = useRouter()
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

    return (
        <MainLayout navTitle="Update Post" title={`Open Jira | ${form.content.slice(0, 12).toString()} ...`} >
            <section className="lg:max-w-4xl max-w-lg mx-auto w-full grid lg:grid-cols-2 grid-cols-1 gap-5 my-10">
                <div className="bg-black/70 p-5 rounded-xl shadow-2xl shadow-white/10 flex flex-col gap-5">
                    <h3 className="text-3xl font-extrabold">Entry</h3>
                    <pre className="whitespace-pre-wrap block flex-1">{form.content}</pre>
                    <button disabled={isLoading} className="btn btn-error btn-outline" onClick={handleDelete}>Delete this note permanently</button>
                </div>
                <form className="rounded-xl p-5 flex flex-col gap-5" onSubmit={eventsForm.handleSubmit}>

                    <label htmlFor="content" className="block font-bold">If you want to update this entry, add the new  entry</label>

                    <textarea
                        value={form.content}
                        name='content'
                        ref={inputRef}
                        id="content"
                        placeholder="Type here"
                        className=" rounded p-3 bg-neutral-focus border border-white/50 w-full resize-none block h-28"
                        onChange={eventsForm.handleChange}
                        disabled={isLoading}
                    />

                    <label htmlFor="status" className="block font-bold">Status</label>
                    <div className="flex w-full justify-start items-center gap-7 flex-wrap">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                disabled={isLoading}
                                onChange={eventsForm.handleChange}
                                defaultChecked={form.status === 'pending'}
                                type="radio"
                                name="status"
                                id="pending"
                                className="radio radio-accent" />
                            <span>Pending</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                disabled={isLoading}
                                onChange={eventsForm.handleChange}
                                defaultChecked={form.status === 'progress'}
                                type="radio"
                                name="status"
                                id="progress"
                                className="radio radio-accent" />
                            <span>Progress</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                disabled={isLoading}
                                onChange={eventsForm.handleChange}
                                defaultChecked={form.status === 'completed'}
                                type="radio"
                                name="status"
                                id="completed"
                                className="radio radio-accent" />
                            <span>Completed</span>
                        </label>
                    </div>

                    <div className="flex flex-wrap justify-between items-center mt-5 lg:gap-0 gap-10">
                        <button
                            className="btn btn-secondary lg:w-auto w-full"
                            type="submit"
                            disabled={form.content.length <= 0 || isLoading}
                        >Update entry</button>
                        <button disabled={isLoading} className="btn btn-primary btn-outline lg:w-auto w-full" type="button" onClick={handleGoBack} >Cancel</button>
                    </div>
                </form>
                {
                    (isLoading && messageLoading) && <div className="fixed top-0 left-0 w-screen h-screen bg-black/80 flex justify-center items-center flex-col gap-5">
                        <div className="flex flex-col gap-10">
                            <Loading className="after:bg-black w-20 h-20" />
                            <span className="text-4xl font-bold animate-pulse text-secondary-focus">{messageLoading} </span>
                        </div>
                    </div>
                }
            </section>
        </MainLayout >
    )
}

export default SingleEntry

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { id } = query as { id: string }
    const entry = await getEntryById(id)

    if (!entry) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            ...entry
        }
    }
}
