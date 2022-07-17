import { Loading } from "./"

export const LoadingSingleEntry = ({ isLoading, messageLoading }: { isLoading: boolean, messageLoading: string }) => {
    return (
        <>
            {
                (isLoading && messageLoading) && <div className="fixed top-0 left-0 w-screen h-screen bg-black/80 flex justify-center items-center flex-col gap-5">
                    <div className="flex flex-col gap-10">
                        <Loading className="after:bg-black w-20 h-20" />
                        <span className="text-4xl font-bold animate-pulse text-secondary-focus">{messageLoading} </span>
                    </div>
                </div>
            }
        </>
    )
}
