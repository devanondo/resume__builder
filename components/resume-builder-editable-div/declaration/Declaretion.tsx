'use client'

import { GroupItem } from '@/components/shared/wrapper'
import { useRef } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { TypographyInput } from '../components/Typography'
import { useSetHeight } from '../education/update/healper'
import { ResumeComponentProps } from '../types/resume-component-type'
import DeclaretionItem from './declaretion-item'
import { useAppSelector } from '@/redux/hooks'
import GropPopover from '@/components/popover/group-popover'

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
    const { groupPopoverKey } = useAppSelector((state) => state.popover)

    const divRef = useRef<HTMLDivElement>(null)
    useSetHeight({ divRef, name: `${wname}.height` })

    return (
        <GroupItem popoverKey={wname} className="relative">
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
            {groupPopoverKey === wname && <GropPopover name={wname} />}
        </GroupItem>
    )
}

export default DeclarationSection
