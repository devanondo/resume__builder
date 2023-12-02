/* eslint-disable no-unused-vars */
'use client'

import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'

interface RatingProps {
    type?: 'circle' | 'box' | 'flatbox'
    onChange?: (value: number) => void
    value?: number
}

const Rating = ({
    type = 'circle',
    value = 0,
    onChange = () => {},
}: RatingProps) => {
    const [rating, setRating] = useState<number>(value)
    const { watch } = useFormContext()

    switch (type) {
        case 'circle':
            return (
                <div className="w-fit flex items-center gap-x-1">
                    {[...Array(5)].map((_, index) => {
                        return (
                            <div
                                className={cn(
                                    'w-5 h-5 rounded-full bg-zinc-200 cursor-pointer'
                                )}
                                style={{
                                    background:
                                        index + 1 <= rating &&
                                        watch('style.colors.1'),
                                }}
                                key={index}
                                onClick={() => {
                                    setRating(index + 1)
                                    onChange(index + 1)
                                }}
                            ></div>
                        )
                    })}
                </div>
            )

        case 'box':
            return (
                <div className="w-fit flex items-center gap-x-1">
                    {[...Array(5)].map((_, index) => {
                        return (
                            <div
                                className={cn(
                                    'w-5 h-5 bg-zinc-200 cursor-pointer'
                                )}
                                style={{
                                    background:
                                        index + 1 <= rating &&
                                        watch('style.colors.1'),
                                }}
                                key={index}
                                onClick={() => {
                                    setRating(index + 1)
                                    onChange(index + 1)
                                }}
                            ></div>
                        )
                    })}
                </div>
            )

        case 'flatbox':
            return (
                <div className="w-fit flex items-center">
                    {[...Array(5)].map((_, index) => {
                        return (
                            <div
                                className={cn(
                                    'w-6 h-5 bg-zinc-200 cursor-pointer'
                                )}
                                style={{
                                    background:
                                        index + 1 <= rating &&
                                        watch('style.colors.1'),
                                }}
                                key={index}
                                onClick={() => {
                                    setRating(index + 1)
                                    onChange(index + 1)
                                }}
                            ></div>
                        )
                    })}
                </div>
            )

        default:
            return
    }
}

export default Rating
