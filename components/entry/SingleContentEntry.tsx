interface PropsSingleEntryContent {
    content: string;
    isLoading: boolean
    handleDelete: () => void
}

export const SingleEntryContent = ({ content, isLoading, ...events }: PropsSingleEntryContent) => {
    return (
        <div className="bg-black/70 p-5 rounded-xl shadow-2xl shadow-white/10 flex flex-col gap-5">
            <h3 className="text-3xl font-extrabold">Entry</h3>
            <pre className="whitespace-pre-wrap block flex-1">{content}</pre>
            <button disabled={isLoading} className="btn btn-error btn-outline" onClick={events.handleDelete}>Delete this note permanently</button>
        </div>
    )
}
