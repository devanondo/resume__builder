import { HTMLAttributes } from 'react'

export type TypeProps =
    | 'heading'
    | 'title'
    | 'subheading'
    | 'subtitle'
    | 'paragraph'

export interface CommonSectionProps extends HTMLAttributes<HTMLDivElement> {
    name: string
    link?: boolean
    href?: string
    type: TypeProps
}
