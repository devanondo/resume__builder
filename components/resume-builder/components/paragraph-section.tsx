'use client'

import {
    FontSizeType,
    getFontSize,
} from '@/components/resume-styles/utils/font-design'
import Text from '@/components/shared/Text'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/redux/hooks'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const Paragraph = ({
    name,
    className,
    placeholder,
}: {
    name: string
    className?: string
    placeholder?: string
}) => {
    const { control } = useFormContext()

    const { layoutStyles } = useAppSelector((state) => state.layout)

    const fontSize = getFontSize(
        layoutStyles.fontSize as FontSizeType
    ).paragraph

    const color = layoutStyles.secondaryColor

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field: f }) => (
                    <Text
                        placeholder={placeholder || ''}
                        className={cn(
                            'rounded focus:bg-transparent',
                            className
                        )}
                        {...f}
                        style={{
                            fontSize,
                            color,
                        }}
                    />
                )}
            />
        </>
    )
}

export default Paragraph
