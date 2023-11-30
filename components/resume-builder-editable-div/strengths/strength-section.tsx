/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import Icon from '@/components/icon-picker/icon-wrapper'
import StrengthPopover from '@/components/popover/strength-popover'
import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { useEffect, useRef, useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { TypographyInput } from '../components/Typography'

const StrengthSection = () => {
    const name = 'strengths.items'

    const [width, setWidth] = useState<number>(0)
    const ref = useRef<HTMLDivElement>(null)

    const { control } = useFormContext()
    const dispatch = useAppDispatch()
    const { groupPopoverKey } = useAppSelector((state) => state.popover)

    const { fields, append, remove } = useFieldArray({
        name,
        control,
    })

    const { watchValue } = useWatchForm({ name })

    useEffect(() => {
        setWidth(ref.current?.offsetWidth!)
        return () => {}
    })

    return (
        <GroupItem popoverKey="strengths">
            <TypographyInput
                placeholder="Strength"
                name={'strengths.name' as const}
                type="title"
            />

            <div
                ref={ref}
                className={cn(
                    'grid',
                    width > 370 ? 'grid-cols-2' : 'grid-cols-1'
                )}
            >
                {fields.map((field: any, i) => (
                    <GroupItem
                        popoverKey={name + i}
                        className="relative col-span-1"
                        key={field.id + i}
                    >
                        <div
                            className="w-full flex pb-1 "
                            onClick={() => {
                                dispatch(
                                    showPopover({
                                        name: name + i,
                                        type: 'group__entry',
                                    })
                                )
                            }}
                        >
                            {watchValue[i]?.show_icon && (
                                <Icon
                                    name={`${name}[${i}].icon` as const}
                                    className={cn(
                                        'text-xl',
                                        watchValue[i]?.description?.enabled &&
                                            'text-2xl'
                                    )}
                                />
                            )}
                            <div className="flex flex-col justify-center">
                                <TypographyInput
                                    name={`${name}[${i}].name` as const}
                                    placeholder={field.placeholder}
                                    className="pl-0"
                                    type="subtitle"
                                />

                                {watchValue[i]?.description?.enabled && (
                                    <TypographyInput
                                        name={
                                            `${name}[${i}].description.text` as const
                                        }
                                        placeholder={
                                            field.description.placeholder
                                        }
                                        className={cn(
                                            'text-sm px-0',
                                            watchValue[i].description
                                                .italic_description && 'italic'
                                        )}
                                        type="paragraph"
                                    />
                                )}
                            </div>
                        </div>

                        {fields.length - 1 !== i ? (
                            <div className="w-full px-2">
                                <div className="border-b w-full border-dashed"></div>
                            </div>
                        ) : null}

                        {groupPopoverKey === name + i && (
                            <StrengthPopover
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

export default StrengthSection
