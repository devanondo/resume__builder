'use client'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useFieldArray, useFormContext } from 'react-hook-form'

import Icon from '@/components/icon-picker/icon-wrapper'
import EducationPopover from '@/components/popover/education-popover'
import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { showPopover } from '@/redux/slices/pop-slice'
import Paragraph from '../components/paragraph-section'
import SectionTitle from '../components/section-title'
import SubHeading from '../components/sub-heading-section'
import SubTitle from '../components/sub-title-section'
import { useWatchForm } from '@/components/hooks/use-form-watch'

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
            <SectionTitle
                placeholder="Education"
                name={'educations.name' as const}
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
                            <SubHeading
                                name={`${name}[${i}].name` as const}
                                placeholder={field.placeholder || ''}
                                className="text-md font-semibold "
                            />

                            <div className="flex items-start gap-x-3 justify-between  py-2">
                                <div className="">
                                    <SubTitle
                                        name={
                                            `${name}[${i}].institution.name` as const
                                        }
                                        placeholder={
                                            field.institution?.placeholder || ''
                                        }
                                        className={cn('text-sm font-bold')}
                                    />
                                    <Paragraph
                                        name={
                                            `${name}[${i}].date.from` as const
                                        }
                                        placeholder={
                                            field.date?.placeholder || ''
                                        }
                                        className={cn(
                                            'text-sm italic font-semibold p-0'
                                        )}
                                    />

                                    <Paragraph
                                        name={`${name}[${i}].location` as const}
                                        placeholder="Location"
                                        className={cn('text-sm p-0')}
                                    />
                                </div>
                                {watchValue[i]?.show__institution && (
                                    <div className="border-l-2 border-[#74767E] w-fit px-3 py-2">
                                        <SubHeading
                                            name={
                                                `${name}[${i}].institution.gpa` as const
                                            }
                                            placeholder={
                                                field.institution
                                                    ?.placeholder_gpa || 'GPA'
                                            }
                                            className={cn(
                                                'text-md text-center italic font-semibold uppercase  !text-[#74767E]'
                                            )}
                                        />
                                        <div className="flex items-center -mt-2">
                                            <Paragraph
                                                name={
                                                    `${name}[${i}].institution.gpa_score` as const
                                                }
                                                placeholder={
                                                    field.institution
                                                        ?.placeholder_gpa_score ||
                                                    '4.00'
                                                }
                                                className={cn(
                                                    'text-sm text-right text-[#74767E]'
                                                )}
                                            />

                                            <div className="flex items-center justify-center ">
                                                /
                                            </div>

                                            <Paragraph
                                                name={
                                                    `${name}[${i}].institution.gpa_max` as const
                                                }
                                                placeholder={
                                                    field.institution
                                                        ?.placeholder_gpa_max ||
                                                    '4.00'
                                                }
                                                className={cn(
                                                    'text-sm text-[#74767E]'
                                                )}
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
