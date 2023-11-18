'use client'

import {
    FontSizeType,
    getFontSize,
} from '@/components/resume-styles/utils/font-design'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/redux/hooks'
import TextBox from './Editable'

const SubTitle = ({
    name,
    className,
    placeholder,
}: {
    name: string
    className?: string
    placeholder?: string
}) => {
    const { layoutStyles } = useAppSelector((state) => state.layout)
    const fontSize = getFontSize(layoutStyles.fontSize as FontSizeType).subTitle
    const color = layoutStyles.primaryColor

    return (
        <>
            <TextBox
                name={name}
                className={cn(
                    'text-2xl font-bold rounded  focus:bg-transparent',
                    className
                )}
                placeholder={placeholder}
                style={{ fontSize, color: color as string }}
            />
        </>
    )
}

export default SubTitle
