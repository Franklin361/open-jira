

interface PropsContainerButtonsForm {
    contentEntry: string;
    isLoading: boolean
    handleGoBack: () => void
}

export const ContainerButtonsForm = ({ contentEntry, isLoading, ...events }: PropsContainerButtonsForm) => {
    return (
        <div className="flex flex-wrap justify-between items-center mt-5 lg:gap-0 gap-10">
            <button
                className="btn btn-secondary lg:w-auto w-full"
                type="submit"
                disabled={contentEntry.length <= 0 || isLoading}
            >Update entry</button>
            <button disabled={isLoading} className="btn btn-primary btn-outline lg:w-auto w-full" type="button" onClick={events.handleGoBack} >Cancel</button>
        </div>
    )
}
