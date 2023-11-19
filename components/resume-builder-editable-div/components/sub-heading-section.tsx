'use client'

import {
    FontSizeType,
    getFontSize,
} from '@/components/resume-styles/utils/font-design'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/redux/hooks'
import TextBox from './Editable'
import { HTMLAttributes } from 'react'

interface SubHeadingProps extends HTMLAttributes<HTMLDivElement> {
    name: string
}

const SubHeading = ({
    name,
    className,
    placeholder,
    ...props
}: SubHeadingProps) => {
    const { layoutStyles } = useAppSelector((state) => state.layout)

    const fontSize = getFontSize(
        layoutStyles.fontSize as FontSizeType
    ).subHeading

    const color = layoutStyles.secondaryColor

    return (
        <>
            <TextBox
                name={name}
                className={cn(
                    'text-2xl font-bold rounded  focus:bg-transparent',
                    className
                )}
                style={{
                    fontSize,
                    color: color as string,
                }}
                placeholder={placeholder || ''}
                {...props}
            />
        </>
    )
}

export default SubHeading
