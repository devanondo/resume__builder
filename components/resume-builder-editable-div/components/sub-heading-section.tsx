'use client'

import {
    FontSizeType,
    getFontSize,
} from '@/components/resume-styles/utils/font-design'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/redux/hooks'
import TextBox from './Editable'
import { CommonSectionProps } from './types'

const SubHeading = ({
    name,
    className,
    placeholder,
    link,
    href,
    ...props
}: CommonSectionProps) => {
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
                href={href}
                link={link}
                {...props}
            />
        </>
    )
}

export default SubHeading
