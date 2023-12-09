'use client'

import ReferencesPopover from '@/components/popover/reference-popover'
import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/redux/hooks'
import { useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { HiOutlineMail } from 'react-icons/hi'
import { MdShareLocation } from 'react-icons/md'
import { SlCalender } from 'react-icons/sl'
import { TypographyInput } from '../components/Typography'

const ReferencesDraggableItem = ({
    fields,
    field,
    name,
    i,
    watchValue,
    append,
    remove,
}: any) => {
    const { watch, setValue } = useFormContext()
    const { groupPopoverKey } = useAppSelector((state) => state.popover)
    const divRef = useRef<HTMLDivElement>(null)

    const height = divRef.current?.offsetHeight

    const grid = watch('references.grid')

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
            className="relative"
            key={field.id + i}
        >
            <div className="w-full flex px-2 py-0 flex-col">
                <TypographyInput
                    name={`${name}[${i}].name` as const}
                    placeholder={field.placeholder || ''}
                    className="!px-0 !Aqpy-0"
                    type="subheading"
                />

                <div className="flex flex-col">
                    {watchValue[i]?.show_email ? (
                        <div className="flex items-center gap-x-1">
                            <HiOutlineMail className="w-3 h-3" />
                            <TypographyInput
                                name={`${name}[${i}].email` as const}
                                placeholder={field.email}
                                className={cn(
                                    '!text-xs italic !font-semibold p-0'
                                )}
                                link={true}
                                href="mailto"
                                type="paragraph"
                            />
                        </div>
                    ) : null}

                    {watchValue[i]?.show_phone ? (
                        <div className="flex items-center gap-x-1">
                            <SlCalender className="w-3 h-3" />
                            <TypographyInput
                                name={`${name}[${i}].phone` as const}
                                placeholder={field.phone}
                                className={cn('!text-xs p-0')}
                                type="paragraph"
                            />
                        </div>
                    ) : null}

                    {watchValue[i]?.show_address ? (
                        <div className="flex items-center gap-x-1">
                            <MdShareLocation className="w-3 h-3" />
                            <TypographyInput
                                name={`${name}[${i}].address` as const}
                                placeholder={field.address}
                                className={cn('!text-xs p-0')}
                                type="paragraph"
                            />
                        </div>
                    ) : null}
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
                <ReferencesPopover
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

export default ReferencesDraggableItem
