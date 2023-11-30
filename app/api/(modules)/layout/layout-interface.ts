import { Model } from 'mongoose'
type Item = {
    title: string
    height: number
    key: string
    position: number
}

type IItems = {
    title: string
    column: number
    items: Item[]
}

export interface ILayout {
    uid: string
    sections: IItems[]
}

export type ILayoutModel = Model<ILayout, Record<string, unknown>>
