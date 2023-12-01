/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import { TypographyInput } from '../components/Typography'
import LanguageItems from './language-items'

const LanguageSection = () => {
    const [width, setWidth] = useState<number>(0)
    const ref = useRef<HTMLDivElement>(null)

    const name = 'languages.items'

    useEffect(() => {
        setWidth(ref.current?.offsetWidth!)
        return () => {}
    })

    return (
        <GroupItem popoverKey="languages">
            <TypographyInput
                name={'languages.name' as const}
                placeholder="Languages"
                type="title"
            />
            <div
                ref={ref}
                className={cn(
                    'grid',
                    width > 370 ? 'grid-cols-2' : 'grid-cols-1'
                )}
            >
                <LanguageItems name={name} />
            </div>
        </GroupItem>
    )
}

export default LanguageSection
