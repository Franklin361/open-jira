import { Entry } from "../interfaces"

interface SeedData {
    entries: Pick<Entry, 'content' | 'date' | 'status'>[]
}

export const seedData: SeedData = {
    entries: [
        {
            content: 'This is an example! - completed',
            date: Date.now(),
            status: 'completed'
        },
        {
            content: 'This is an example! - pending',
            date: Date.now(),
            status: 'pending'
        },
        {
            content: 'This is an example! - progress',
            date: Date.now(),
            status: 'progress'
        },
    ]
}