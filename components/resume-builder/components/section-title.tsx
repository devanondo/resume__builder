'use client'

import {
    FontSizeType,
    getFontSize,
} from '@/components/resume-styles/utils/font-design'
import Text from '@/components/shared/Text'
import { useAppSelector } from '@/redux/hooks'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const SectionTitle = ({ name }: { name: string }) => {
    const { control } = useFormContext()

    const { layoutStyles } = useAppSelector((state) => state.layout)

    const fontSize = getFontSize(layoutStyles.fontSize as FontSizeType).title

    const color = layoutStyles.primaryColor

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field: f }) => (
                    <Text
                        placeholder="Summery"
                        className="text-2xl font-bold uppercase rounded -mb-[10px] focus:bg-transparent"
                        {...f}
                        style={{
                            fontSize,
                            color,
                        }}
                    />
                )}
            />
            <div className="w-full px-2">
                <div
                    style={{
                        borderBottom: `3px solid ${color}`,
                    }}
                    className=""
                ></div>
            </div>
        </>
    )
}

export default SectionTitle
