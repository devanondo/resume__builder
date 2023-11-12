'use client'
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'

import styles from './List.module.scss'
import { cn } from '@/lib/utils'

export interface Props {
    children: React.ReactNode
    columns?: number
    style?: React.CSSProperties
    horizontal?: boolean
}

export const List = forwardRef<HTMLUListElement, Props>(
    ({ children, columns = 1, horizontal, style }: Props, ref) => {
        return (
            <ul
                ref={ref}
                style={
                    {
                        ...style,
                        '--columns': columns,
                    } as React.CSSProperties
                }
                className={cn(styles.List, horizontal && styles.horizontal)}
            >
                {children}
            </ul>
        )
    }
)
