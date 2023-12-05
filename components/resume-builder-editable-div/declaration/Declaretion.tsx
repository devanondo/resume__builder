'use client'

import { GroupItem } from '@/components/shared/wrapper'
import { useAppDispatch } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { TypographyInput } from '../components/Typography'

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
            <TypographyInput
                name={'declaration.name' as const}
                placeholder="Declaration"
                type="title"
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
            ))}
        </GroupItem>
    )
}

export default DeclarationSection
