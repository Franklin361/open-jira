
export const ButtonsForm = ({ handleHideForm, loading, value }: { loading: boolean, value: string, handleHideForm: () => void }) => {
    return (
        <>
            {
                loading
                    ? <p className="animate-pulse text-md block my-2 text-secondary">Creating</p>
                    : <div className="flex justify-between mt-2">
                        <button
                            type="submit"
                            className="btn btn-primary btn-sm"
                            disabled={value.length <= 0 || loading}
                        >
                            Add Entry
                        </button>
                        <button disabled={loading} onClick={handleHideForm} type="button" className="btn btn-ghost btn-sm">Cancel</button>
                    </div>
            }
        </>
    )
}
