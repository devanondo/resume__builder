'use client'

import LanguagePopover from '@/components/popover/language-popover'
import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/redux/hooks'
import { useRef } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TypographyInput } from '../components/Typography'
import Rating from '../components/rating'

const LanguageDraggableItems = ({
    fields,
    name,
    i,
    watchValue,
    append,
    remove,
    field,
}: any) => {
    const { setValue, watch, control } = useFormContext()
    const { groupPopoverKey } = useAppSelector((state) => state.popover)

    const divRef = useRef<HTMLDivElement>(null)

    const height = divRef?.current?.offsetHeight

    const grid = watch('educations.grid')

    if (grid === 2 && divRef) {
        if (
            height &&
            Math.floor(height! / 2) !== Math.floor(watchValue[i]?.height)
        ) {
            setValue(`${name}.${i}.height`, Math.floor(height! / 2))
        }
    } else {
        if (height && height !== Math.floor(watchValue[i]?.height)) {
            setValue(`${name}.${i}.height`, Math.floor(height!))
        }
    }

    return (
        <GroupItem popoverKey={name + i} className="relative" ref={divRef}>
            <div className="w-full pb-1">
                <div className="flex items-center justify-between pr-2">
                    <div className="">
                        <TypographyInput
                            placeholder={field.placeholder}
                            name={`${name}[${i}].name` as const}
                            className=" px-2"
                            type="subtitle"
                        />

                        {watchValue[i]?.show_label && (
                            <TypographyInput
                                placeholder={'Native'}
                                name={`${name}[${i}].level` as const}
                                className="py-0"
                                type="paragraph"
                            />
                        )}
                    </div>

                    <Controller
                        name={`${name}[${i}].score.count` as const}
                        control={control}
                        render={({ field: f }) => (
                            <Rating
                                type={watchValue[i]?.score?.slide_type}
                                value={watchValue[i]?.score?.count}
                                // value={f.value}
                                onChange={(v) => {
                                    f.onChange(v)
                                }}
                            />
                        )}
                    />
                </div>
            </div>
            <div className="w-full px-2">
                <div
                    className={cn(
                        'w-full',
                        grid === 2 ? 'bord_b_2' : 'bord_b_1'
                    )}
                ></div>
            </div>

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
    )
}

export default LanguageDraggableItems
