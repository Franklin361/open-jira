import create from 'zustand'
import { Entry } from '../interfaces'
import { v4 as uuid } from 'uuid';

interface EntryStoreState {
  listEntries: Entry[],
  addEntry: (content: string) => void
}

export const useEntryStore = create<EntryStoreState>(set => ({
  listEntries: [],
  addEntry: (content: string) => set(state => {
    const newEntry: Entry = {
      content,
      date: new Date().getTime(),
      id: uuid(),
      status: 'pending'
    }

    return {
      ...state,
      listEntries: [newEntry, ...state.listEntries]
    }
  })
}))
