import create from 'zustand'
import { Entry, Status } from '../interfaces'
import { v4 as uuid } from 'uuid';

interface EntryStoreState {
  listEntries: Entry[] | null,
  setEntries: (entries: Entry[]) => void,
  addEntry: (content: string) => void,
  isDragging: boolean
  setIsDragging: (isDragging: boolean) => void
  updateEntry: (id: string, status: Status) => void,
  deleteEntry: (id: string) => void,
}

export const useEntryStore = create<EntryStoreState>((set, get) => ({
  listEntries: null,
  isDragging: false,

  setIsDragging: (isDragging: boolean) => set(state => ({ ...state, isDragging })),

  setEntries: (entries: Entry[]) => set(state => ({ ...state, listEntries: [...entries] })),

  deleteEntry: (id: string) => set(state => ({ ...state, listEntries: [...state.listEntries!.filter(entry => entry._id !== id)] })),

  updateEntry: (id: string, status: Status) => set(state => {
    const entries = get().listEntries;
    const newEntryUpdated = entries!.filter(entry => entry._id === id)[0];
    if (newEntryUpdated) newEntryUpdated.status = status

    return {
      ...state,
      listEntries: [newEntryUpdated, ...entries!.filter(entry => entry._id !== id)]
    }
  }),

  addEntry: (content: string) => set(state => {
    const newEntry: Entry = {
      content,
      date: new Date().getTime(),
      _id: uuid(),
      status: 'pending'
    }

    return {
      ...state,
      listEntries: [newEntry, ...state.listEntries!]
    }
  })

}))
