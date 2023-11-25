import { ReactNode } from 'react'

export interface ItemsComponents {
    header: ReactNode
    summerySection: ReactNode
    experienceSummary: ReactNode
    skills: ReactNode
    strengths: ReactNode
    educations: ReactNode
    languages: ReactNode
    declaration: ReactNode
    references: ReactNode
    projects: ReactNode
}

export interface IItem {
    title: string
    height?: number
    key: keyof ItemsComponents
    position: number
}

export interface ITypoStyle {
    fontSize: string
    lineHeight: string
    fontWeight: number
}
export interface IResumeLayout {
    title: string
    column: number
    items: IItem[]
}

export type ILayoutStyle = 'double' | 'single' | 'onethird'

export interface ILayoutItems {
    id: string
    title: string
    isActive: boolean
    imgUrl?: string
    layoutStyle: ILayoutStyle
    layout: IResumeLayout[]
    typo: any
}

export interface ILayoutStyles {
    layout: ILayoutStyle
    typo: any
    // colorPallate: string
}

// heading: ITypoStyle
//     titleTypo: ITypoStyle
//     subHeading: ITypoStyle
//     subTitle: ITypoStyle
//     paragraph: ITypoStyle
