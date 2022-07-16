import type { NextApiRequest, NextApiResponse } from 'next'
import { database } from '../../../database'
import { Entry, IEntry } from '../../../models'
import mongoose from 'mongoose';

type Data = { msg: string } | IEntry[] | IEntry

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (!mongoose.isValidObjectId(req.query.id)) return res.status(400).json({ msg: "Id no valid! 🚨" })

    switch (req.method) {
        case 'PUT': return updateEntry(req, res);
        case 'DELETE': return deleteEntry(req, res);
        default: return res.status(400).json({ msg: "Method no exists! 🚨" })
    }

}


export const deleteEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        await database.connect();

        const entry = await Entry.findById(req.query.id);

        if (!entry) return res.status(400).json({ msg: 'Ups, this entry no exists! 😞' });

        await Entry.findByIdAndDelete(req.query.id)

        res.status(200).json({ msg: 'Post deleted successfully ✅' })

    } catch (error: any) {
        console.log(error)
        res.status(400).json({ msg: `${error.errors.status.message} 😞` })
    } finally {
        await database.disconnect();
    }
}

export const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        await database.connect();

        const entry = await Entry.findById(req.query.id);

        if (!entry) return res.status(400).json({ msg: 'Ups, this entry no exists! 😞' });

        const { content = entry.content, status = entry.status } = req.body

        const entryUpdated = await Entry.findByIdAndUpdate(req.query.id, { content, status }, { new: true, runValidators: true });

        res.status(200).json(entryUpdated!)

    } catch (error: any) {
        console.log(error)
        res.status(400).json({ msg: `${error.errors.status.message} 😞` })
    } finally {
        await database.disconnect();
    }
}
