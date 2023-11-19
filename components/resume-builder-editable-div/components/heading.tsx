'use client'

import Text from '@/components/shared/Text'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/redux/hooks'
import { Controller, useFormContext } from 'react-hook-form'
import { CommonSectionProps } from './types'

const Heading = ({ name, className, placeholder }: CommonSectionProps) => {
    const { control } = useFormContext()

    const { layoutStyles } = useAppSelector((state) => state.layout)

    const color = layoutStyles.primaryColor

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field: f }) => (
                    <Text
                        placeholder={placeholder || ''}
                        className={cn(
                            'font-bold rounded -mb-[10px] focus:bg-transparent',
                            className
                        )}
                        {...f}
                        style={{
                            color,
                        }}
                    />
                )}
            />
        </>
    )
}

export default Heading
