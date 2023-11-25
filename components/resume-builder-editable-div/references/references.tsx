'use client'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import ReferencesPopover from '@/components/popover/reference-popover'
import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { showPopover } from '@/redux/slices/pop-slice'
import { MdShareLocation } from 'react-icons/md'

import { SlCalender } from 'react-icons/sl'
import { TypographyInput } from '../components/Typography'
import { HiOutlineMail } from 'react-icons/hi'

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
            <TypographyInput
                name={'references.name' as const}
                placeholder="References"
                type="title"
            />

            <div className="grid grid-cols-2">
                {fields.map((field: any, i) => (
                    <GroupItem
                        popoverKey={name + i}
                        className="relative"
                        key={field.id + i}
                    >
                        <div
                            className="w-full flex px-2 py-0 flex-col"
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
                                name={`${name}[${i}].name` as const}
                                placeholder={field.placeholder || ''}
                                className="pb-0 pt-0"
                                type="subheading"
                            />

                            <div className="flex flex-col">
                                {watchValue[i]?.show_email ? (
                                    <div className="flex items-center gap-x-1">
                                        <HiOutlineMail className="w-3 h-3" />
                                        <TypographyInput
                                            name={
                                                `${name}[${i}].email` as const
                                            }
                                            placeholder={field.email}
                                            className={cn(
                                                '!text-xs italic !font-semibold p-0'
                                            )}
                                            link={true}
                                            href="mailto"
                                            type="paragraph"
                                        />
                                    </div>
                                ) : null}

                                {watchValue[i]?.show_phone ? (
                                    <div className="flex items-center gap-x-1">
                                        <SlCalender className="w-3 h-3" />
                                        <TypographyInput
                                            name={
                                                `${name}[${i}].phone` as const
                                            }
                                            placeholder={field.phone}
                                            className={cn('!text-xs p-0')}
                                            type="paragraph"
                                        />
                                    </div>
                                ) : null}

                                {watchValue[i]?.show_address ? (
                                    <div className="flex items-center gap-x-1">
                                        <MdShareLocation className="w-3 h-3" />
                                        <TypographyInput
                                            name={
                                                `${name}[${i}].address` as const
                                            }
                                            placeholder={field.address}
                                            className={cn('!text-xs p-0')}
                                            type="paragraph"
                                        />
                                    </div>
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
