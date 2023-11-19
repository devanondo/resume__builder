import { HTMLAttributes } from 'react'

export interface CommonSectionProps extends HTMLAttributes<HTMLDivElement> {
    name: string
    link?: boolean
    href?: string
}
