'use client'

import {
    FontSizeType,
    getFontSize,
} from '@/components/resume-styles/utils/font-design'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/redux/hooks'
import TextBox from './Editable'

const Paragraph = ({
    name,
    className,
    placeholder,
}: {
    name: string
    className?: string
    placeholder?: string
}) => {
    const { layoutStyles } = useAppSelector((state) => state.layout)

    const fontSize = getFontSize(
        layoutStyles.fontSize as FontSizeType
    ).paragraph

    return (
        <>
            <TextBox
                name={name}
                className={cn('px-2', className)}
                style={{ fontSize }}
                placeholder={placeholder}
            />
        </>
    )
}

export default Paragraph
