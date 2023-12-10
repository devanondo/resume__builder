'use client'

import { GroupItem } from '@/components/shared/wrapper'
import { useRef } from 'react'
import { TypographyInput } from '../components/Typography'
import { useSetHeight } from '../education/update/healper'

const DeclaretionItem = ({ name, i, field }: any) => {
    const divRef = useRef<HTMLDivElement>(null)
    useSetHeight({ divRef, name: `${name}.${i}.height` })

    return (
        <div className="" ref={divRef}>
            <GroupItem popoverKey={name + i}>
                <div className="w-full">
                    <TypographyInput
                        name={`${name}[${i}].description` as const}
                        className="py-0 !text-sm"
                        type="subtitle"
                        placeholder="Write about your informations!"
                    />
                    <TypographyInput
                        placeholder={field.placeholder || 'Your Name'}
                        name={`${name}[${i}].name` as const}
                        className="pt-0 px-2 !text-xs"
                        type="paragraph"
                    />
                </div>
            </GroupItem>
        </div>
    )
}

export default DeclaretionItem
