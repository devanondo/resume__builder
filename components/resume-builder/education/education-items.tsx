'use client'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { GraduationCap } from 'lucide-react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'

import EducationPopover from '@/components/popover/education-popover'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { showPopover } from '@/redux/slices/pop-slice'

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
        <>
            <Controller
                name={'educations.name' as const}
                control={control}
                defaultValue=""
                render={({ field: f }) => (
                    <Input
                        className="text-3xl font-bold uppercase border-b-[5px] border-black"
                        {...f}
                    />
                )}
            />
            <div>
                {fields.map((field: any, i) => (
                    <div className="relative" key={field.id + i}>
                        <div
                            className="w-full flex items-center"
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
                                        <Input
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
                                            <Input
                                                placeholder={
                                                    field.institution
                                                        ?.placeholder || ''
                                                }
                                                className={cn('text-sm')}
                                                {...f}
                                            />
                                        )}
                                    />
                                </div>
                                {/* )} */}

                                <div className="flex">
                                    <div className="">
                                        <Controller
                                            name={
                                                `${name}[${i}].date.from` as const
                                            }
                                            control={control}
                                            defaultValue=""
                                            render={({ field: f }) => (
                                                <Input
                                                    placeholder={
                                                        field.date
                                                            ?.placeholder || ''
                                                    }
                                                    className={cn('text-sm')}
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
                                                <Input
                                                    placeholder="Location"
                                                    className={cn('text-sm')}
                                                    {...f}
                                                />
                                            )}
                                        />
                                    </div>
                                    <div className="">
                                        <Controller
                                            name={
                                                `${name}[${i}].institution.gpa` as const
                                            }
                                            control={control}
                                            defaultValue=""
                                            render={({ field: f }) => (
                                                <Input
                                                    placeholder={
                                                        field.institution
                                                            ?.placeholder_gpa ||
                                                        ''
                                                    }
                                                    className={cn('text-sm')}
                                                    {...f}
                                                />
                                            )}
                                        />
                                        <div className="flex">
                                            <Controller
                                                name={
                                                    `${name}[${i}].institution.gpa_score` as const
                                                }
                                                control={control}
                                                defaultValue=""
                                                render={({ field: f }) => (
                                                    <Input
                                                        placeholder={
                                                            field.institution
                                                                ?.placeholder_gpa_score ||
                                                            ''
                                                        }
                                                        className={cn(
                                                            'text-sm'
                                                        )}
                                                        {...f}
                                                    />
                                                )}
                                            />
                                            /
                                            <Controller
                                                name={
                                                    `${name}[${i}].institution.gpa_max` as const
                                                }
                                                control={control}
                                                defaultValue=""
                                                render={({ field: f }) => (
                                                    <Input
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
                    </div>
                ))}
            </div>
        </>
    )
}

export default EducationItems
