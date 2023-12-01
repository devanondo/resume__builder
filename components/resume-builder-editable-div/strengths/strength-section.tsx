/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import { TypographyInput } from '../components/Typography'
import StrengthItem from './strength-items'

const StrengthSection = () => {
    const name = 'strengths.items'

    const [width, setWidth] = useState<number>(0)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setWidth(ref.current?.offsetWidth!)
        return () => {}
    })

    return (
        <GroupItem popoverKey="strengths">
            <TypographyInput
                placeholder="Strength"
                name={'strengths.name' as const}
                type="title"
            />

            <div
                ref={ref}
                className={cn(
                    'grid',
                    width > 370 ? 'grid-cols-2' : 'grid-cols-1'
                )}
            >
                <StrengthItem name={name} />
            </div>
        </GroupItem>
    )
}

export default StrengthSection
