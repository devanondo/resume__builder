import { Schema, model, models } from 'mongoose'
import { ILayout, ILayoutModel } from './layout-interface'

const itemSchema = new Schema({
    title: { type: String, required: true },
    key: { type: String, required: true },
})

const itemsSchema = new Schema({
    title: { type: String, required: true },
    column: { type: Number, required: true },
    items: [itemSchema],
})

const layoutSchema = new Schema(
    {
        uid: { type: String, required: true },
        sections: [itemsSchema],
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
)

export const Layout =
    models['layout'] || model<ILayout, ILayoutModel>('layout', layoutSchema)
