import create from 'zustand'
import { Entry, Status } from '../interfaces'
import { v4 as uuid } from 'uuid';

interface EntryStoreState {
  listEntries: Entry[] | null,
  setEntries: (entries: Entry[] | null) => void,
  addEntry: (entry: Entry) => void,
  isDragging: boolean
  setIsDragging: (isDragging: boolean) => void
  updateEntry: (entry: Entry) => void,
  deleteEntry: (id: string) => void,
}

export const useEntryStore = create<EntryStoreState>((set, get) => ({
  listEntries: null,
  isDragging: false,

  setIsDragging: (isDragging: boolean) => set(state => ({ ...state, isDragging })),

  setEntries: (entries: Entry[] | null = []) => set(state => ({ ...state, listEntries: entries })),

  deleteEntry: (id: string) => set(state => ({ ...state, listEntries: [...state.listEntries!.filter(entry => entry._id !== id)] })),

  updateEntry: (entryUpdated: Entry) => set(state => {

    return {
      ...state,
      listEntries: [entryUpdated, ...state.listEntries!.filter(entry => entry._id !== entryUpdated._id)]
    }
  }),

  addEntry: (entry: Entry) => set(state => ({
    ...state,
    listEntries: [entry, ...state.listEntries!]
  }))

}))
