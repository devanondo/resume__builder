'use client'

import React from 'react'

import styles from './Wrapper.module.scss'
import { cn } from '@/lib/utils'

interface Props {
    children: React.ReactNode
    center?: boolean
    style?: React.CSSProperties
}

export function Wrapper({ children, center, style }: Props) {
    return (
        <div
            className={cn(styles.Wrapper, center && styles.center)}
            style={style}
        >
            {children}
        </div>
    )
}
