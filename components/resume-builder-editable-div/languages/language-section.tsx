/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import LanguagePopover from '@/components/popover/language-popover'
import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { useEffect, useRef, useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { TypographyInput } from '../components/Typography'
import Rating from '../components/rating'

const LanguageSection = () => {
    const { control } = useFormContext()
    const dispatch = useAppDispatch()
    const [width, setWidth] = useState<number>(0)
    const ref = useRef<HTMLDivElement>(null)

    const { groupPopoverKey } = useAppSelector((state) => state.popover)
    const name = 'languages.items'

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
        <GroupItem popoverKey="languages">
            <TypographyInput
                name={'languages.name' as const}
                placeholder="Languages"
                type="title"
            />
            <div
                ref={ref}
                className={cn(
                    'grid',
                    width > 350 ? 'grid-cols-2' : 'grid-cols-1'
                )}
            >
                {fields.map((field: any, i) => (
                    <GroupItem
                        popoverKey={name + i}
                        key={field.id}
                        className="relative"
                    >
                        <div
                            className="w-full"
                            onClick={() => {
                                dispatch(
                                    showPopover({
                                        name: name + i,
                                        type: 'group__entry',
                                    })
                                )
                            }}
                        >
                            <div className="flex items-center justify-between pr-2">
                                <div className="">
                                    <TypographyInput
                                        placeholder={field.placeholder}
                                        name={`${name}[${i}].name` as const}
                                        className="pb-0 px-2"
                                        type="subtitle"
                                    />

                                    <TypographyInput
                                        placeholder={'Native'}
                                        name={`${name}[${i}].level` as const}
                                        className="py-0"
                                        type="paragraph"
                                    />
                                </div>

                                <Rating
                                    type={watchValue[i]?.score?.type}
                                    value={watchValue[i]?.score?.score}
                                />
                            </div>
                        </div>
                        {fields.length - 1 !== i ? (
                            <div className="w-full px-2">
                                <div className="border-b w-full border-dashed"></div>
                            </div>
                        ) : null}

                        {groupPopoverKey === name + i && (
                            <LanguagePopover
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

export default LanguageSection
