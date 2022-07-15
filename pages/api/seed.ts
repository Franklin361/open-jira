import type { NextApiRequest, NextApiResponse } from 'next'
import { database, seedData } from '../../database'
import { Entry } from '../../models'

type Data = {
    msg: string
}

const isProduction = process.env.NODE_ENV === 'production'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (isProduction) return res.status(401).json({ msg: "You don't have access to this service 🤫" })

    await database.connect();

    await Entry.deleteMany();

    await Entry.insertMany(seedData.entries)

    await database.disconnect();

    res.status(401).json({ msg: "Process realized successfully ✅" })
}