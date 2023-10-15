'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import StrengthPopover from '@/components/popover/strength-popover'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { User2 } from 'lucide-react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'

const StrengthSection = () => {
    const name = 'strengths.items'

    const { control } = useFormContext()
    const dispatch = useAppDispatch()
    const { groupPopoverKey } = useAppSelector((state) => state.popover)

    const { fields, append, remove } = useFieldArray({
        name,
        control,
    })

    const iconMap = {
        team: <User2 className="w-8 h-8" />,
    }
    const { watchValue } = useWatchForm({ name })

    return (
        <div>
            <Controller
                name={'strengths.name' as const}
                control={control}
                defaultValue=""
                render={({ field: f }) => (
                    <Input
                        className="text-3xl font-bold uppercase border-b-[5px] border-black"
                        {...f}
                    />
                )}
            />
            <div className="">
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

                                {watchValue[i]?.description.enabled && (
                                    <Controller
                                        name={
                                            `${name}[${i}].description.text` as const
                                        }
                                        control={control}
                                        defaultValue=""
                                        render={({ field: f }) => (
                                            <Input
                                                placeholder={
                                                    field.description
                                                        ?.placeholder || ''
                                                }
                                                className={cn(
                                                    'text-sm',
                                                    watchValue[i].description
                                                        .italic_description &&
                                                        'italic'
                                                )}
                                                {...f}
                                            />
                                        )}
                                    />
                                )}
                            </div>
                        </div>

                        {groupPopoverKey === name + i && (
                            <StrengthPopover
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
        </div>
    )
}

export default StrengthSection
