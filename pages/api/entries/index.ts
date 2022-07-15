import type { NextApiRequest, NextApiResponse } from 'next'
import { database } from '../../../database'
import { Entry, IEntry } from '../../../models'

type Data = { msg: string } | IEntry[] | IEntry

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET': return listEntries(res);
        case 'POST': return createEntry(req, res);
        default: return res.status(400).json({ msg: "Endpoint no exists! 🚨" })
    }

}


export const listEntries = async (res: NextApiResponse<Data>) => {

    await database.connect();

    const entries = await Entry.find().sort({ date: 'descending' });

    await database.disconnect();

    res.status(200).json(entries)
}

export const createEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { content = '' } = req.body
    const newEntry = new Entry({
        content,
        date: Date.now()
    })

    try {
        await database.connect();

        await newEntry.save()

        res.status(200).json(newEntry)
    } catch (error) {
        res.status(500).json({ msg: 'Ups, something is wrong, please trying later! 😞' })
    } finally {
        await database.disconnect();
    }
}









