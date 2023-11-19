'use client'

import {
    FontSizeType,
    getFontSize,
} from '@/components/resume-styles/utils/font-design'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/redux/hooks'
import TextBox from './Editable'
import { roboto } from '@/lib/font'

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
                style={{ fontSize }}
                className={cn(
                    'px-2 text-[14px] leading-[17px] text-[#384347]',
                    roboto.className,
                    className
                )}
                placeholder={placeholder}
            />
        </>
    )
}

export default Paragraph
