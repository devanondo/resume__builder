'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import ExperienceGroupPopover from '@/components/popover/experience-popover'
import Text from '@/components/shared/Text'
import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/redux/hooks'
import { Calendar, MapIcon } from 'lucide-react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import ExperienceBuletItem from './experience-bullet-item'

interface ExperienceItemProps {
    name: string
}

const ExperienceItem = ({ name }: ExperienceItemProps) => {
    const { control } = useFormContext()
    const { groupPopoverKey } = useAppSelector((state) => state.popover)

    const { fields, remove, append } = useFieldArray({
        name,
        control,
    })

    const { watchValue } = useWatchForm({ name })

    return (
        <div>
            {fields.map((field, i) => (
                <GroupItem
                    popoverKey={name + i}
                    key={field.id}
                    className="relative a__item"
                >
                    <div
                    // onClick={() => {
                    //     dispatch(
                    //         showPopover({
                    //             name: name + i,
                    //             type: 'group__entry',
                    //         })
                    //     )
                    // }}
                    // className=""
                    >
                        <Controller
                            name={`${name}.${i}.position` as const}
                            control={control}
                            defaultValue=""
                            render={({ field: f }) => (
                                <Text
                                    className={cn(
                                        'text-xl',
                                        watchValue[i]?.bold_position &&
                                            'font-semibold'
                                    )}
                                    {...f}
                                />
                            )}
                        />
                        <Controller
                            name={`${name}.${i}.workplace` as const}
                            control={control}
                            defaultValue=""
                            render={({ field: f }) => (
                                <Text
                                    className="text-md font-bold -mt-3 italic"
                                    {...f}
                                />
                            )}
                        />
                        <div className="flex items-center pl-3 -mt-3">
                            {watchValue[i]?.show_location && (
                                <div className="flex items-center gap-x-1">
                                    <Calendar className="w-4 h-4" />{' '}
                                    <Controller
                                        name={`${name}.${i}.location` as const}
                                        control={control}
                                        defaultValue=""
                                        render={({ field: f }) => (
                                            <Text className="text-sm" {...f} />
                                        )}
                                    />
                                </div>
                            )}
                            <div className="flex items-center gap-x-1">
                                <MapIcon className="w-4 h-4" />
                                <Controller
                                    name={`${name}.${i}.location` as const}
                                    control={control}
                                    defaultValue=""
                                    render={({ field: f }) => (
                                        <Text className="text-sm" {...f} />
                                    )}
                                />
                            </div>
                        </div>
                        {watchValue[i]?.description.enabled && (
                            <Controller
                                name={`${name}.${i}.description.text` as const}
                                control={control}
                                defaultValue=""
                                render={({ field: f }) => (
                                    <Text
                                        {...f}
                                        className={cn(
                                            'text-sm text-justify text-[#74767E] -mt-2',
                                            watchValue[i].description
                                                .italic_description && 'italic'
                                        )}
                                    />
                                )}
                            />
                        )}
                    </div>

                    <ExperienceBuletItem name={`${name}.${i}.bulets`} />

                    {groupPopoverKey === name + i && (
                        <ExperienceGroupPopover
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
    )
}

export default ExperienceItem
