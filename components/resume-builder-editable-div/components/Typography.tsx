'use client'

import { Font } from '@/lib/font'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/redux/hooks'
import { Controller, useFormContext } from 'react-hook-form'
import TextBox from './Editable'
import { CommonSectionProps, TypeProps } from './types'
import PickDate from '@/components/shared/date-picker'

export const TypographyInput = ({
    name,
    className,
    placeholder,
    link,
    href,
    type,
    ref,
    datePicker,
    year,
    style: styles,
    ...props
}: CommonSectionProps) => {
    const { layoutWithStyles } = useAppSelector((state) => state.layout)

    const { watch, control } = useFormContext()

    const style = watch('style')

    const fontStyle = style && layoutWithStyles?.typo[style?.fontSize][type]

    const getFontFamilly = (key: TypeProps) => {
        switch (key) {
            case 'heading':
            case 'subheading':
            case 'title':
            case 'role':
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
            case 'role':
                return style?.colors[1]
        }
    }

    const commonStyles = () => {
        switch (type) {
            case 'heading':
                return ''
            case 'role':
                return ''
            case 'subheading':
                return ''
            case 'title':
                return 'px-2 font-bold uppercase rounded focus:bg-transparent'
            case 'paragraph':
                return 'px-2 text-[14px] leading-[16px] text-[#384347]'
            case 'subtitle':
                return 'text-2xl font-bold rounded px-2  focus:bg-transparent'
        }
    }

    return (
        <>
            {datePicker ? (
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => {
                        return (
                            <PickDate
                                className={className}
                                year={year}
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )
                    }}
                />
            ) : (
                <TextBox
                    name={name}
                    className={cn(
                        commonStyles(),
                        className,
                        getFontFamilly(type as TypeProps)?.className
                    )}
                    style={{
                        ...styles,
                        ...fontStyle,
                        color: getColors(type as TypeProps),
                    }}
                    placeholder={placeholder}
                    href={href}
                    link={link}
                    ref={ref}
                    {...props}
                />
            )}
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
