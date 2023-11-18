'use client'

import { GroupItem } from '@/components/shared/wrapper'
import { useAppDispatch } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { useFieldArray, useFormContext } from 'react-hook-form'
import Paragraph from '../components/paragraph-section'
import SectionTitle from '../components/section-title'
import SubHeading from '../components/sub-heading-section'

const DeclarationSection = () => {
    const { control } = useFormContext()
    const dispatch = useAppDispatch()
    const name = 'declaration.items'

    const { fields } = useFieldArray({
        name,
        control,
    })

    return (
        <GroupItem popoverKey="declaration">
            <SectionTitle
                name={'declaration.name' as const}
                placeholder="Declaration"
            />

            {fields.map((field: any, i) => (
                <GroupItem
                    popoverKey={name + i}
                    key={field.id}
                    className="relative"
                >
                    <div
                        className="w-full"
                        onClick={() => {
                            dispatch(
                                showPopover({
                                    name: name + i,
                                    type: 'group__entry',
                                })
                            )
                        }}
                    >
                        <Paragraph
                            name={`${name}[${i}].description` as const}
                            className="py-0"
                        />
                        <SubHeading
                            placeholder={field.placeholder || ''}
                            name={`${name}[${i}].name` as const}
                            className="pt-0 px-2"
                        />
                    </div>
                </GroupItem>
            ))}
        </GroupItem>
    )
}

export default DeclarationSection
