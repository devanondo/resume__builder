/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { useAppDispatch } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { debounce } from 'lodash'
import { useEffect, useRef, useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import ExperienceDraggableItem from './experience-draggable-item'

const ExperienceItem = ({
    name,
    itemIndex,
}: {
    name: string
    itemIndex: number[]
}) => {
    const dispatch = useAppDispatch()

    const { control, setValue, watch } = useFormContext()
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

    if (!mounted) return null
    return (
        <div className={cn('group__item__border')}>
            {fields.map((field: any, i) => {
                if (!itemIndex.includes(i)) {
                    return
                }
                return (
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
                            className="relative w-full "
                            key={field.id + i}
                        >
                            <ExperienceDraggableItem
                                field={field}
                                append={append}
                                fields={fields}
                                i={i}
                                name={name}
                                remove={remove}
                                watchValue={watchValue}
                            />
                        </GroupItem>
                    </div>
                )
            })}
        </div>
    )
}

export default ExperienceItem
