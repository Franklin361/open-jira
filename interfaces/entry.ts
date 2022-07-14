
export interface Entry {
    id: string;
    content: string;
    date: number;
    status: Status
}

export type Status = 'progress' | 'completed' | 'pending'