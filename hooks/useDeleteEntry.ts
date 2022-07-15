import { useState } from "react"
import { useEntryStore } from "../store"
import { useRouter } from 'next/router';
import { deletePost } from "../utils";

export const useDeleteEntry = (id: string) => {
    const isDragging = useEntryStore(state => state.isDragging)
    const setIsDragging = useEntryStore(state => state.setIsDragging)
    const deleteEntry = useEntryStore(state => state.deleteEntry)

    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text', id)
        setIsDragging(true)
    }

    const handleDragEnd = () => setIsDragging(false)

    const handleDelete = async () => {
        setIsLoading(() => true)
        const isDeleted = await deletePost(id)
        if (isDeleted) deleteEntry(id)
        setIsLoading(() => false)
    }

    const handleGoUpdatePage = () => router.push(`entries/${id}`)

    return {
        isLoading,
        isDragging,
        handleGoUpdatePage,
        handleDragStart,
        handleDragEnd,
        handleDelete,
    }
}