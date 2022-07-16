export const SideBar = ({ title }: { title: string }) => {
    return (
        <div className="p-5 bg-neutral flex items-center gap-5">
            <p className="font-extrabold text-2xl select-none">Open <span className="text-accent-focus">Jira</span></p>
            <span className="font-light">( {title} )</span>
        </div>
    )
}