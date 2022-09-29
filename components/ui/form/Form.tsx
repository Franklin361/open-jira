import { useEntryStore } from "../../../store"
import { createPost } from "../../../utils"
import { ButtonsForm } from "./"
import { useForm, useShowHideForm } from '../../../hooks';

interface StateForm {
    content: string
}


export const Form = ({ existErrorInDb }: { existErrorInDb: boolean }) => {
    const addEntry = useEntryStore(state => state.addEntry)

    const { form: { content }, loading, inputRef, handleResetForm, ...eventsForm } = useForm<StateForm>({
        initialState: {
            content: ''
        },
        onSubmit: async () => {
            if (existErrorInDb) return;
            const entry = await createPost({ content })
            if (entry) {
                addEntry(entry)
                handleResetForm()
                handleChangeForm(false)
            }
        }
    })

    const [isShowForm, handleChangeForm] = useShowHideForm({ inputRef, handleResetForm })

    return (
        <form className="mt-2" onSubmit={eventsForm.handleSubmit}>
            {
                isShowForm
                    ? <>
                        <textarea
                            className="resize-none min-h-[100px] w-full bg-neutral text-neutral-content p-2 font-semibold rounded"
                            onChange={eventsForm.handleChange}
                            value={content}
                            ref={inputRef}
                            placeholder='To do ...'
                            disabled={loading}
                            name='content'
                        />
                        <ButtonsForm handleHideForm={() => handleChangeForm(false)} loading={loading} value={content} />
                    </>
                    : <button
                        type="button"
                        className="btn btn-block btn-secondary btn-sm"
                        onClick={() => handleChangeForm(true)}
                        disabled={loading}
                    > Create entry</button>
            }
        </form>
    )
}

