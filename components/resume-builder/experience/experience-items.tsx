'use client'

import { useHidePopover } from '@/components/hooks/use-hide-popover'
import ExperienceGroupPopover from '@/components/popover/experience-popover'
import TextAreaCommon from '@/components/shared/common-text-area'
import { Input } from '@/components/ui/input'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { Calendar, MapIcon } from 'lucide-react'
import { ElementRef, useRef } from 'react'
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

    const divRef = useRef<ElementRef<'div'>>(null)
    useHidePopover({
        divRef,
        disMount: () => {
            dispatch(showPopover(null))
        },
    })

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
                        ref={divRef}
                        className=""
                    >
                        <Controller
                            name={`${name}.${i}.position` as const}
                            control={control}
                            defaultValue=""
                            render={({ field: f }) => (
                                <Input className="text-xl" {...f} />
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

                        <Controller
                            name={`${name}.${i}.description` as const}
                            control={control}
                            defaultValue=""
                            render={({ field: f }) => (
                                <TextAreaCommon
                                    field={f}
                                    fields={fields}
                                    className="text-sm"
                                />
                            )}
                        />
                    </div>

                    <ExperienceBuletItem name={`${name}.${i}.bulets.items`} />

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
