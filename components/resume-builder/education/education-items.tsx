'use client'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { GraduationCap } from 'lucide-react'
import { useFieldArray, useFormContext } from 'react-hook-form'

import EducationPopover from '@/components/popover/education-popover'
import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { showPopover } from '@/redux/slices/pop-slice'
import Paragraph from '../components/paragraph-section'
import SectionTitle from '../components/section-title'
import SubHeading from '../components/sub-heading-section'
import SubTitle from '../components/sub-title-section'

const EducationItems = () => {
    const name = 'educations.items'

    const { control } = useFormContext()
    const dispatch = useAppDispatch()
    const { groupPopoverKey } = useAppSelector((state) => state.popover)

    const { fields, append, remove } = useFieldArray({
        name,
        control,
    })

    const iconMap = {
        team: <GraduationCap className="w-8 h-8" />,
    }

    return (
        <GroupItem popoverKey="educations">
            <SectionTitle name={'educations.name' as const} />

            <div className="mt-1">
                {fields.map((field: any, i) => (
                    <GroupItem
                        popoverKey={name + i}
                        className="relative"
                        key={field.id + i}
                    >
                        <div
                            className="w-full flex px-2"
                            onClick={() => {
                                dispatch(
                                    showPopover({
                                        name: name + i,
                                        type: 'group__entry',
                                    })
                                )
                            }}
                        >
                            <div className="mr-2">{iconMap['team']}</div>
                            <div className="">
                                <SubHeading
                                    name={`${name}[${i}].name` as const}
                                    placeholder={field.placeholder || ''}
                                    className="text-md font-semibold "
                                />

                                {/* {watchValue[i].description.enabled && ( */}

                                <div className="flex">
                                    <SubTitle
                                        name={
                                            `${name}[${i}].institution.name` as const
                                        }
                                        placeholder={
                                            field.institution?.placeholder || ''
                                        }
                                        className={cn('text-sm font-bold')}
                                    />
                                </div>
                                {/* )} */}

                                <div className="flex items-center">
                                    <div className="">
                                        <Paragraph
                                            name={
                                                `${name}[${i}].date.from` as const
                                            }
                                            placeholder={
                                                field.date?.placeholder || ''
                                            }
                                            className={cn(
                                                'text-sm italic font-semibold py-0 mt-2'
                                            )}
                                        />

                                        <Paragraph
                                            name={
                                                `${name}[${i}].location` as const
                                            }
                                            placeholder="Location"
                                            className={cn('text-sm -mt-2')}
                                        />
                                    </div>
                                    <div className=" border-l border-[#9d9d9d] w-[200px]">
                                        <SubHeading
                                            name={
                                                `${name}[${i}].institution.gpa` as const
                                            }
                                            placeholder={
                                                field.institution
                                                    ?.placeholder_gpa || ''
                                            }
                                            className={cn(
                                                'text-md text-center italic font-semibold uppercase'
                                            )}
                                        />

                                        <div className="flex items-center">
                                            <Paragraph
                                                name={
                                                    `${name}[${i}].institution.gpa_score` as const
                                                }
                                                placeholder={
                                                    field.institution
                                                        ?.placeholder_gpa_score ||
                                                    ''
                                                }
                                                className={cn(
                                                    'text-sm text-right'
                                                )}
                                            />

                                            <div className="flex items-center justify-center -mt-2">
                                                /
                                            </div>

                                            <Paragraph
                                                name={
                                                    `${name}[${i}].institution.gpa_max` as const
                                                }
                                                placeholder={
                                                    field.institution
                                                        ?.placeholder_gpa_max ||
                                                    ''
                                                }
                                                className={cn('text-sm')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

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
            </div>
        </GroupItem>
    )
}

export default EducationItems
