/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import Icon from '@/components/icon-picker/icon-wrapper'
import StrengthPopover from '@/components/popover/strength-popover'
import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { debounce } from 'lodash'
import { useEffect, useRef, useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { TypographyInput } from '../components/Typography'

const StrengthItem = ({ name }: { name: string }) => {
    const { control, setValue, watch } = useFormContext()
    const { groupPopoverKey } = useAppSelector((state) => state.popover)
    const dispatch = useAppDispatch()

    const { fields, remove, append } = useFieldArray({
        name,
        control,
    })

    const { watchValue } = useWatchForm({ name })

    const [list, setList] = useState(fields)

    useEffect(() => {
        setList(fields)
    }, [fields])

    const [dragging, setDragging] = useState(false)
    const nodeItem = useRef<number | null | undefined>(undefined)
    const node = useRef<HTMLElement | null | undefined>(undefined)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleDragStart = (e: any, index: number) => {
        dispatch(showPopover(null))
        nodeItem.current = index
        node.current = e.target
        node?.current?.addEventListener('dragend', handleDragEnd)
        setTimeout(() => {
            setDragging(true)
        }, 0)
    }

    const handleDragEnd = () => {
        setDragging(false)
        node?.current?.removeEventListener('dragend', handleDragEnd)
        node.current = null
        nodeItem.current = null
    }

    const handleDragEnter = (e: any, index: number) => {
        let currentItem = nodeItem.current

        if (currentItem !== index) {
            setList((oldList: any) => {
                const newList = [...oldList]

                newList.splice(
                    index,
                    0,
                    newList.splice(currentItem as number, 1)[0]
                )

                nodeItem.current = index
                setValue(name, newList)
                return newList
            })
        }
    }

    const debouncedUpdate = debounce(async () => {
        const data = watch(name)
        setList(data)
    }, 10)

    useEffect(() => {
        if (!dragging) {
            debouncedUpdate()
        }

        return debouncedUpdate.cancel
    }, [watch, debouncedUpdate])

    const updateData = debounce(() => {
        // setValue(name, list)
    }, 100)

    const getStyles = (params: number) => {
        const currentItem = nodeItem.current

        if (currentItem === params) {
            return 'dnd_section_current w-full'
        }
        return 'w-full'
    }

    const [width, setWidth] = useState<number>(0)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setWidth(ref.current?.offsetWidth!)
        return () => {}
    })

    if (!mounted) return null
    return (
        <div
            ref={ref}
            className={cn('grid', 'group__item__border')}
            style={{
                gridTemplateColumns: width > 370 ? '1fr 1fr' : '1fr',
            }}
        >
            {fields.map((field: any, i: number) => (
                <div
                    aria-disabled={false}
                    aria-roledescription="sortable"
                    draggable
                    key={field.id}
                    onDragStart={(e) => handleDragStart(e, i)}
                    onDragEnter={(e) => handleDragEnter(e, i)}
                    className={cn(
                        'rounded cursor-move',
                        dragging ? getStyles(i) : 'w-full'
                    )}
                    onDragEnd={() => {
                        updateData()
                    }}
                >
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

                        <div className="w-full px-2">
                            <div
                                className={cn(
                                    'w-full pt-1',
                                    width > 370 ? 'bord_b_2' : 'bord_b_1'
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
                </div>
            ))}
        </div>
    )
}

export default StrengthItem
