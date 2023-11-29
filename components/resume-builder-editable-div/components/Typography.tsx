'use client'

import { Font } from '@/lib/font'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/redux/hooks'
import { useFormContext } from 'react-hook-form'
import TextBox from './Editable'
import { CommonSectionProps, TypeProps } from './types'

export const TypographyInput = ({
    name,
    className,
    placeholder,
    link,
    href,
    type,
    ...props
}: CommonSectionProps) => {
    const { layoutWithStyles } = useAppSelector((state) => state.layout)

    const { watch } = useFormContext()

    const style = watch('style')

    const fontStyle = style && layoutWithStyles?.typo[style?.fontSize][type]

    const getFontFamilly = (key: TypeProps) => {
        switch (key) {
            case 'heading':
            case 'subheading':
            case 'title':
                return Font[style?.fontHeading]

            case 'paragraph':
            case 'subtitle':
                return Font[style?.fontBody]
        }
    }

    const getColors = (key: TypeProps) => {
        switch (key) {
            case 'heading':
            case 'subheading':
            case 'title':
                return style?.colors[0]

            case 'paragraph':
                return 'px-2 text-[14px] leading-[17px] text-[#384347]'
            case 'subtitle':
                return style?.colors[1]
        }
    }

    const commonStyles = () => {
        switch (type) {
            case 'heading':
                return ''
            case 'subheading':
                return 'text-2xl font-bold rounded  focus:bg-transparent'

            case 'title':
                return 'px-2 font-bold uppercase rounded focus:bg-transparent'

            case 'paragraph':
                return 'px-2 text-[14px] leading-[17px] text-[#384347]'
            case 'subtitle':
                return 'text-2xl font-bold rounded px-2  focus:bg-transparent'
        }
    }

    return (
        <>
            <TextBox
                name={name}
                className={cn(
                    commonStyles(),
                    className,
                    getFontFamilly(type as TypeProps)?.className
                )}
                style={{ ...fontStyle, color: getColors(type as TypeProps) }}
                placeholder={placeholder}
                href={href}
                link={link}
                {...props}
            />
            {type === 'title' && (
                <div className="w-full px-2">
                    <div
                        style={{
                            borderBottom: `2.5px solid ${getColors('title')}`,
                        }}
                        className=""
                    ></div>
                </div>
            )}
        </>
    )
}
