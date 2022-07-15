import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    msg: string | string[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { msg = 'Ups, something is wrong! 😞' } = req.query

    res.status(500).json({ msg: msg! });
}