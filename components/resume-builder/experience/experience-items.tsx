'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import ExperienceGroupPopover from '@/components/popover/experience-popover'
import TextAreaCommon from '@/components/shared/common-text-area'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { Calendar, MapIcon } from 'lucide-react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import ExperienceBuletItem from './experience-bullet-item'

interface ExperienceItemProps {
    name: string
}

const ExperienceItem = ({ name }: ExperienceItemProps) => {
    const { control } = useFormContext()
    const dispatch = useAppDispatch()
    const { groupPopoverKey } = useAppSelector((state) => state.popover)

    const { fields, remove, append } = useFieldArray({
        name,
        control,
    })

    const { watchValue } = useWatchForm({ name })

    // const divRef = useRef<ElementRef<'div'>>(null)
    // useHidePopover({
    //     divRef,
    //     disMount: () => {
    //         dispatch(showPopover(null))
    //     },
    // }).

    return (
        <div className="border border-green-500 mt-1">
            {fields.map((field, i) => (
                <div key={field.id} className="relative">
                    <div
                        onClick={() => {
                            dispatch(
                                showPopover({
                                    name: name + i,
                                    type: 'group__entry',
                                })
                            )
                        }}
                        // ref={divRef}
                        className=""
                    >
                        <Controller
                            name={`${name}.${i}.position` as const}
                            control={control}
                            defaultValue=""
                            render={({ field: f }) => (
                                <Input
                                    className={cn(
                                        'text-xl',

                                        watchValue[i]?.bold_position &&
                                            'font-bold'
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
                                <Input className="text-xl" {...f} />
                            )}
                        />
                        <div className="flex items-center pl-3">
                            {watchValue[i]?.show_location && (
                                <div className="flex items-center gap-x-2">
                                    <Calendar className="w-4 h-4" />{' '}
                                    <Controller
                                        name={`${name}.${i}.location` as const}
                                        control={control}
                                        defaultValue=""
                                        render={({ field: f }) => (
                                            <Input
                                                className="text-sm font-bold"
                                                {...f}
                                            />
                                        )}
                                    />
                                </div>
                            )}
                            <div className="flex items-center gap-x-2">
                                <MapIcon className="w-4 h-4" />
                                <Controller
                                    name={`${name}.${i}.location` as const}
                                    control={control}
                                    defaultValue=""
                                    render={({ field: f }) => (
                                        <Input
                                            className="text-sm font-bold"
                                            {...f}
                                        />
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
                                    <TextAreaCommon
                                        field={f}
                                        fields={fields}
                                        className={cn(
                                            'text-sm',
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
                </div>
            ))}
        </div>
    )
}

export default ExperienceItem
