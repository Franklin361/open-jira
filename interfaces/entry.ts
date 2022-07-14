
export interface Entry {
    _id: string;
    content: string;
    date: number;
    status: Status
}

export type Status = 'progress' | 'completed' | 'pending'