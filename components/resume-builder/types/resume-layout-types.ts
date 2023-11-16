import { ReactNode } from 'react'

export interface ItemsComponents {
    header: ReactNode
    summerySection: ReactNode
    experienceSummary: ReactNode
    skills: ReactNode
    strength: ReactNode
    education: ReactNode
    languages: ReactNode
    declaration: ReactNode
    references: ReactNode
}

export interface IItem {
    title: string
    height?: number
    key: keyof ItemsComponents
    position: number
}

export interface IResumeLayout {
    title: string
    column: number
    items: IItem[]
}

export interface ILayoutItems {
    id: string
    title: string
    isActive: boolean
    imgUrl?: string
    layout: IResumeLayout[]
}
