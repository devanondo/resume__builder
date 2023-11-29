import { Model } from 'mongoose'

export interface TextStyle {
    fontSize: string
    lineHeight: string
    fontWeight: number | string
}

export interface Item {
    title: string
    height: number
    key: string
    position: number
}

export interface LayoutGroup {
    title: string
    column: number
    items: Item[]
}

type LayoutStyle = 'double'

export interface Typo {
    small: {
        heading: TextStyle
        title: TextStyle
        subheading: TextStyle
        subtitle: TextStyle
        paragraph: TextStyle
    }
    medium: {
        heading: TextStyle
        title: TextStyle
        subheading: TextStyle
        subtitle: TextStyle
        paragraph: TextStyle
    }
    large: {
        heading: TextStyle
        title: TextStyle
        subheading: TextStyle
        subtitle: TextStyle
        paragraph: TextStyle
    }
    extralarge: {
        heading: TextStyle
        title: TextStyle
        subheading: TextStyle
        subtitle: TextStyle
        paragraph: TextStyle
    }
}

export interface ILayout {
    id?: string
    title: string
    isActive: boolean
    imgUrl: string
    layoutStyle: LayoutStyle
    layout: LayoutGroup[]
    typo: Typo
}

export type ILayoutModel = Model<ILayout, Record<string, unknown>>
