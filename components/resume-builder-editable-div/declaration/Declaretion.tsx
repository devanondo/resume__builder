'use client'

import { GroupItem } from '@/components/shared/wrapper'
import { useRef } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { TypographyInput } from '../components/Typography'
import { useSetHeight } from '../education/update/healper'
import { ResumeComponentProps } from '../types/resume-component-type'
import DeclaretionItem from './declaretion-item'

const DeclarationSection = ({
    name: wname,
    itemIndex,
}: ResumeComponentProps) => {
    const { control } = useFormContext()
    const name = `${wname}.items`
    const { fields } = useFieldArray({
        name,
        control,
    })

    const divRef = useRef<HTMLDivElement>(null)
    useSetHeight({ divRef, name: `${wname}.height` })

    return (
        <GroupItem popoverKey={wname}>
            <div ref={divRef}>
                <TypographyInput
                    name={'declaration.name' as const}
                    placeholder="Declaration"
                    type="title"
                />
            </div>

            {fields.map((field: any, i) => {
                if (!itemIndex.includes(i)) {
                    return
                }

                return (
                    <DeclaretionItem
                        field={field}
                        name={name}
                        i={i}
                        key={field.id}
                    />
                )
            })}
        </GroupItem>
    )
}

export default DeclarationSection
