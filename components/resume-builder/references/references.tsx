'use client'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { showPopover } from '@/redux/slices/pop-slice'
import Paragraph from '../components/paragraph-section'
import SectionTitle from '../components/section-title'
import SubHeading from '../components/sub-heading-section'
import ReferencesPopover from '@/components/popover/reference-popover'
import { useWatchForm } from '@/components/hooks/use-form-watch'

const ReferencesSection = () => {
    const name = 'references.items'

    const { control } = useFormContext()
    const dispatch = useAppDispatch()
    const { groupPopoverKey } = useAppSelector((state) => state.popover)

    const { fields, append, remove } = useFieldArray({
        name,
        control,
    })

    const { watchValue } = useWatchForm({ name })

    return (
        <GroupItem popoverKey="references">
            <SectionTitle
                name={'references.name' as const}
                placeholder="References"
            />

            <div className="grid grid-cols-2">
                {fields.map((field: any, i) => (
                    <GroupItem
                        popoverKey={name + i}
                        className="relative"
                        key={field.id + i}
                    >
                        <div
                            className="w-full flex px-2 py-2"
                            onClick={() => {
                                dispatch(
                                    showPopover({
                                        name: name + i,
                                        type: 'group__entry',
                                    })
                                )
                            }}
                        >
                            <SubHeading
                                name={`${name}[${i}].name` as const}
                                placeholder={field.placeholder || ''}
                                className="text-md font-semibold pb-0 pt-0"
                            />

                            <div className="flex items-center flex-col">
                                {watchValue[i]?.show_email ? (
                                    <Paragraph
                                        name={`${name}[${i}].email` as const}
                                        placeholder={field.email}
                                        className={cn(
                                            'text-sm italic font-semibold py-1'
                                        )}
                                    />
                                ) : null}

                                {watchValue[i]?.show_phone ? (
                                    <Paragraph
                                        name={`${name}[${i}].phone` as const}
                                        placeholder={field.phone}
                                        className={cn('text-sm py-0 ')}
                                    />
                                ) : null}

                                {watchValue[i]?.show_address ? (
                                    <Paragraph
                                        name={`${name}[${i}].address` as const}
                                        placeholder={field.address}
                                        className={cn('text-sm py-0')}
                                    />
                                ) : null}
                            </div>
                        </div>

                        {groupPopoverKey === name + i && (
                            <ReferencesPopover
                                append={append}
                                fields={fields}
                                index={i}
                                name={name}
                                remove={remove}
                            />
                        )}
                    </GroupItem>
                ))}
            </div>
        </GroupItem>
    )
}

export default ReferencesSection
