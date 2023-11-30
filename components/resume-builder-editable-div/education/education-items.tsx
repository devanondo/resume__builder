'use client'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'

import { useFieldArray, useFormContext } from 'react-hook-form'
import { SlCalender } from 'react-icons/sl'
import { MdShareLocation } from 'react-icons/md'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import Icon from '@/components/icon-picker/icon-wrapper'
import EducationPopover from '@/components/popover/education-popover'
import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { showPopover } from '@/redux/slices/pop-slice'
import { TypographyInput } from '../components/Typography'

const EducationItems = () => {
    const name = 'educations.items'

    const { control } = useFormContext()
    const dispatch = useAppDispatch()
    const { groupPopoverKey } = useAppSelector((state) => state.popover)

    const { fields, append, remove } = useFieldArray({
        name,
        control,
    })

    const { watchValue } = useWatchForm({ name })

    return (
        <GroupItem popoverKey="educations">
            <TypographyInput
                placeholder="Education"
                name={'educations.name' as const}
                type="title"
            />

            {fields.map((field: any, i) => (
                <GroupItem
                    popoverKey={name + i}
                    className="relative w-full"
                    key={field.id + i}
                >
                    <div
                        className="w-full flex items-start"
                        onClick={() => {
                            dispatch(
                                showPopover({
                                    name: name + i,
                                    type: 'group__entry',
                                })
                            )
                        }}
                    >
                        <Icon name={`${name}[${i}].icon` as const} />

                        <div className="w-full">
                            <TypographyInput
                                name={`${name}[${i}].name` as const}
                                placeholder={field.placeholder || ''}
                                className=""
                                type="subheading"
                            />

                            <div className="flex items-start gap-x-3 justify-between pb-2 pt-[1.5px]">
                                <div className="">
                                    <TypographyInput
                                        name={
                                            `${name}[${i}].institution.name` as const
                                        }
                                        placeholder={
                                            field.institution?.placeholder || ''
                                        }
                                        className={cn('text-sm font-bold pl-0')}
                                        type="subtitle"
                                    />

                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            <SlCalender className="w-3 h-3" />

                                            <div className="flex items-center">
                                                <TypographyInput
                                                    name={
                                                        `${name}.${i}.date.from` as const
                                                    }
                                                    className="w-fit !text-xs pl-1"
                                                    placeholder="From"
                                                    type="paragraph"
                                                />
                                                -
                                                <TypographyInput
                                                    name={
                                                        `${name}.${i}.date.to` as const
                                                    }
                                                    className="w-fit !text-xs "
                                                    placeholder="To"
                                                    type="paragraph"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <MdShareLocation className="w-3 h-3" />

                                            <TypographyInput
                                                name={
                                                    `${name}[${i}].location` as const
                                                }
                                                placeholder="Location"
                                                className={cn('!text-xs')}
                                                type="paragraph"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {watchValue[i]?.institution?.enabled_gpa && (
                                    <div className="border-l border-[#74767E] w-fit px-2 py-1">
                                        <TypographyInput
                                            name={
                                                `${name}[${i}].institution.gpa` as const
                                            }
                                            placeholder={
                                                field.institution
                                                    ?.placeholder_gpa || 'GPA'
                                            }
                                            className={cn(
                                                '!text-xs text-center mb-1'
                                            )}
                                            type="paragraph"
                                        />
                                        <div className="flex items-center -mt-2">
                                            <TypographyInput
                                                name={
                                                    `${name}[${i}].institution.gpa_score` as const
                                                }
                                                placeholder={
                                                    field.institution
                                                        ?.placeholder_gpa_score ||
                                                    '4.00'
                                                }
                                                className={cn(
                                                    '!text-xs !font-bold text-right px-1'
                                                )}
                                                type="subtitle"
                                            />

                                            <div className="flex items-center justify-center ">
                                                /
                                            </div>

                                            <TypographyInput
                                                name={
                                                    `${name}[${i}].institution.gpa_max` as const
                                                }
                                                placeholder={
                                                    field.institution
                                                        ?.placeholder_gpa_max ||
                                                    '4.00'
                                                }
                                                className={cn(
                                                    '!text-xs !font-bold px-1'
                                                )}
                                                type="paragraph"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {fields.length - 1 !== i ? (
                        <div className="w-full px-2">
                            <div className="border-b w-full border-dashed"></div>
                        </div>
                    ) : null}

                    {groupPopoverKey === name + i && (
                        <EducationPopover
                            append={append}
                            fields={fields}
                            index={i}
                            name={name}
                            remove={remove}
                        />
                    )}
                </GroupItem>
            ))}
        </GroupItem>
    )
}

export default EducationItems
