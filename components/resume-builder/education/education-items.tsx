'use client'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { GraduationCap } from 'lucide-react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'

import EducationPopover from '@/components/popover/education-popover'
import Text from '@/components/shared/Text'
import { cn } from '@/lib/utils'
import { showPopover } from '@/redux/slices/pop-slice'
import { GroupItem } from '@/components/shared/wrapper'

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
            <Controller
                name={'educations.name' as const}
                control={control}
                defaultValue=""
                render={({ field: f }) => (
                    <Text
                        className="text-2xl font-bold uppercase rounded -mb-[10px]"
                        {...f}
                    />
                )}
            />
            <div>
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
                                <Controller
                                    name={`${name}[${i}].name` as const}
                                    control={control}
                                    defaultValue=""
                                    render={({ field: f }) => (
                                        <Text
                                            placeholder={
                                                field.placeholder || ''
                                            }
                                            className="text-md font-semibold "
                                            {...f}
                                        />
                                    )}
                                />

                                {/* {watchValue[i].description.enabled && ( */}

                                <div className="flex">
                                    <Controller
                                        name={
                                            `${name}[${i}].institution.name` as const
                                        }
                                        control={control}
                                        defaultValue=""
                                        render={({ field: f }) => (
                                            <Text
                                                placeholder={
                                                    field.institution
                                                        ?.placeholder || ''
                                                }
                                                className={cn(
                                                    'text-sm font-bold -mt-2'
                                                )}
                                                {...f}
                                            />
                                        )}
                                    />
                                </div>
                                {/* )} */}

                                <div className="flex items-center">
                                    <div className="">
                                        <Controller
                                            name={
                                                `${name}[${i}].date.from` as const
                                            }
                                            control={control}
                                            defaultValue=""
                                            render={({ field: f }) => (
                                                <Text
                                                    placeholder={
                                                        field.date
                                                            ?.placeholder || ''
                                                    }
                                                    className={cn(
                                                        'text-sm italic font-semibold'
                                                    )}
                                                    {...f}
                                                />
                                            )}
                                        />
                                        <Controller
                                            name={
                                                `${name}[${i}].location` as const
                                            }
                                            control={control}
                                            defaultValue=""
                                            render={({ field: f }) => (
                                                <Text
                                                    placeholder="Location"
                                                    className={cn(
                                                        'text-sm -mt-2'
                                                    )}
                                                    {...f}
                                                />
                                            )}
                                        />
                                    </div>
                                    <div className=" border-l border-[#9d9d9d] w-[200px]">
                                        <Controller
                                            name={
                                                `${name}[${i}].institution.gpa` as const
                                            }
                                            control={control}
                                            defaultValue=""
                                            render={({ field: f }) => (
                                                <Text
                                                    placeholder={
                                                        field.institution
                                                            ?.placeholder_gpa ||
                                                        ''
                                                    }
                                                    className={cn(
                                                        'text-md text-center italic font-semibold uppercase'
                                                    )}
                                                    {...f}
                                                />
                                            )}
                                        />
                                        <div className="flex items-center">
                                            <Controller
                                                name={
                                                    `${name}[${i}].institution.gpa_score` as const
                                                }
                                                control={control}
                                                defaultValue=""
                                                render={({ field: f }) => (
                                                    <Text
                                                        placeholder={
                                                            field.institution
                                                                ?.placeholder_gpa_score ||
                                                            ''
                                                        }
                                                        className={cn(
                                                            'text-sm text-right'
                                                        )}
                                                        {...f}
                                                    />
                                                )}
                                            />
                                            <div className="flex items-center justify-center -mt-2">
                                                /
                                            </div>

                                            <Controller
                                                name={
                                                    `${name}[${i}].institution.gpa_max` as const
                                                }
                                                control={control}
                                                defaultValue=""
                                                render={({ field: f }) => (
                                                    <Text
                                                        placeholder={
                                                            field.institution
                                                                ?.placeholder_gpa_max ||
                                                            ''
                                                        }
                                                        className={cn(
                                                            'text-sm'
                                                        )}
                                                        {...f}
                                                    />
                                                )}
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