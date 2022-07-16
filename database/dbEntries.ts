import { isValidObjectId } from "mongoose"
import { database } from "."
import { Entry as IEntry } from "../interfaces"
import { Entry } from "../models"

export const getEntryById = async (id: string): Promise<IEntry | null> => {

    if (!isValidObjectId(id)) return null

    await database.connect()

    const entry = await Entry.findById(id).lean()

    await database.disconnect()

    return entry ? JSON.parse(JSON.stringify(entry)) : null
}