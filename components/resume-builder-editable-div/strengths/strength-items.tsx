/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import { cn } from '@/lib/utils'
import { useAppDispatch } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { debounce } from 'lodash'
import { useEffect, useRef, useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { ResumeComponentProps } from '../types/resume-component-type'
import StrengthDraggableItem from './strength-draggable-item'

const StrengthItem = ({ name, itemIndex }: ResumeComponentProps) => {
    const { control, setValue, watch } = useFormContext()
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
            className={cn('grid w-full group__item__border')}
            style={{
                gridTemplateColumns:
                    watch('strengths.grid') === 2 ? '1fr 1fr' : '1fr',
            }}
        >
            {fields.map((field: any, i: number) => {
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
                        <StrengthDraggableItem
                            field={field}
                            append={append}
                            fields={fields}
                            i={i}
                            name={name}
                            remove={remove}
                            watchValue={watchValue}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default StrengthItem
