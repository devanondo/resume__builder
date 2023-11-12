/* eslint-disable react/display-name */
'use client'

import React, { forwardRef } from 'react'

import styles from './Container.module.scss'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { Handle } from '../Actions/Handle/Handle'

export interface Props {
    children: React.ReactNode
    columns?: number
    label?: string
    style?: React.CSSProperties
    horizontal?: boolean
    hover?: boolean
    handleProps?: React.HTMLAttributes<any>
    scrollable?: boolean
    shadow?: boolean
    placeholder?: boolean
    unstyled?: boolean
    onClick?(): void
    onRemove?(): void
}

export const Container = forwardRef<HTMLDivElement, Props>(
    (
        {
            children,
            columns = 1,
            handleProps,
            horizontal,
            hover,
            onClick,
            onRemove,
            label,
            placeholder,
            style,
            scrollable,
            shadow,
            unstyled,
            ...props
        }: Props
        // ref
    ) => {
        const Component = onClick ? 'button' : 'div'

        return (
            <Component
                {...props}
                // ref={ref}
                style={
                    {
                        ...style,
                        '--columns': columns,
                    } as React.CSSProperties
                }
                className={cn(
                    styles.Container,
                    unstyled && styles.unstyled,
                    horizontal && styles.horizontal,
                    hover && styles.hover,
                    placeholder && styles.placeholder,
                    scrollable && styles.scrollable,
                    shadow && styles.shadow
                )}
                onClick={onClick}
                tabIndex={onClick ? 0 : undefined}
            >
                {label ? (
                    <div className={styles.Header}>
                        {label}
                        <div className={styles.Actions}>
                            {onRemove ? <X onClick={onRemove} /> : undefined}
                            <Handle {...handleProps} />
                        </div>
                    </div>
                ) : null}
                {placeholder ? children : <ul>{children}</ul>}
            </Component>
        )
    }
)
