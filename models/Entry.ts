import mongoose, { Schema, Model } from 'mongoose';

import { Entry } from '../interfaces';

export interface IEntry extends Entry { }

export const entrySchema = new Schema<IEntry>({

    content: { type: String, require: true },
    date: { type: Number },
    status: {
        enum: {
            values: ['pending', 'progress', 'completed'],
            message: "{VALUE} it's not a permitted state"
        },
        type: String,
        default: 'pending'
    }

}, {
    versionKey: false
});

const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entrySchema);

export default EntryModel