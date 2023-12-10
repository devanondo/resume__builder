'use client'

import Icon from '@/components/icon-picker/icon-wrapper'
import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import React, { useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { TypographyInput } from '../components/Typography'
import StrengthPopover from '@/components/popover/strength-popover'

const StrengthDraggableItem = ({
    fields,
    name,
    i,
    watchValue,
    append,
    remove,
    field,
}: any) => {
    const { groupPopoverKey } = useAppSelector((state) => state.popover)
    const { setValue, watch } = useFormContext()
    const dispatch = useAppDispatch()
    const divRef = useRef<HTMLDivElement>(null)

    const height = divRef.current?.offsetHeight
    const grid = watch('strengths.grid')

    if (grid === 2) {
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
        <GroupItem
            ref={divRef}
            popoverKey={name + i}
            className="relative col-span-1"
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
                            watchValue[i]?.description?.enabled && 'text-2xl'
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
                            name={`${name}[${i}].description.text` as const}
                            placeholder={field.description.placeholder}
                            className={cn(
                                'text-sm px-0',
                                watchValue[i].description.italic_description &&
                                    'italic'
                            )}
                            type="paragraph"
                        />
                    )}
                </div>
            </div>

            <div className="w-full px-2">
                <div
                    className={cn(
                        'w-full pt-1',
                        grid === 2 ? 'bord_b_2' : 'bord_b_1'
                    )}
                ></div>
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
        </GroupItem>
    )
}

export default StrengthDraggableItem
