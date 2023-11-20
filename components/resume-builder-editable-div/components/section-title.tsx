'use client'

import {
    FontSizeType,
    getFontSize,
} from '@/components/resume-styles/utils/font-design'
import { useAppSelector } from '@/redux/hooks'
import TextBox from './Editable'
import { CommonSectionProps } from './types'
import { cn } from '@/lib/utils'
import { bitter } from '@/lib/font'

const SectionTitle = ({
    name,
    placeholder,
    link,
    href,
    ...props
}: CommonSectionProps) => {
    const { layoutStyles } = useAppSelector((state) => state.layout)
    const fontSize = getFontSize(layoutStyles.fontSize as FontSizeType).title
    const color = layoutStyles.primaryColor

    return (
        <>
            <TextBox
                name={name}
                className={cn(
                    'px-2 font-bold uppercase rounded focus:bg-transparent',
                    bitter.className
                )}
                style={{
                    fontSize,
                    lineHeight: '26px',
                    color: color as string,
                }}
                placeholder={placeholder}
                href={href}
                link={link}
                {...props}
            />
            <div className="w-full px-2">
                <div
                    style={{
                        borderBottom: `2.5px solid ${color}`,
                    }}
                    className=""
                ></div>
            </div>
        </>
    )
}

export default SectionTitle
