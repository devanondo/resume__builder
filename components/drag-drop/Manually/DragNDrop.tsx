/* eslint-disable no-unused-vars */
'use client'

import { IResumeLayout } from '@/components/resume-builder-editable-div/types/resume-layout-types'
import { cn } from '@/lib/utils'
import { useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { IGroup } from '../DragDrop'

interface DragNDropProps {
    data: any[]
    dragEnd: (e: any, list: IResumeLayout[]) => void
}

interface IParams {
    grpI: number
    itemI: number
}

const DragNDrop = ({ data, dragEnd }: DragNDropProps) => {
    const [list, setList] = useState(data)
    const [dragging, setDragging] = useState(false)

    const dragItem = useRef<IParams | undefined | null>(undefined)
    const dragNode = useRef<HTMLElement | undefined | null>(undefined)

    const handleDragStart = (
        e: any,
        params: { grpI: number; itemI: number }
    ) => {
        dragItem.current = params
        dragNode.current = e.target
        dragNode.current?.addEventListener('dragend', handleDragEnd)
        setTimeout(() => {
            setDragging(true)
        }, 0)
    }

    const handleDragEnd = (e: any) => {
        setDragging(false)
        dragNode.current?.removeEventListener('dragend', handleDragEnd)
        dragItem.current = null
        dragNode.current = null
    }

    const handleDragEnter = (e: any, params: IParams) => {
        const currentItem = dragItem.current
        if (e.target !== dragNode.current) {
            setList((oldList) => {
                let newList = JSON.parse(JSON.stringify(oldList))
                newList[params.grpI].items.splice(
                    params.itemI,
                    0,
                    newList[currentItem!.grpI].items.splice(
                        currentItem?.itemI,
                        1
                    )[0]
                )
                dragItem.current = params
                return newList
            })
        }
    }

    const getStyles = (params: IParams) => {
        const currentItem = dragItem.current

        if (
            currentItem?.grpI === params.grpI &&
            currentItem.itemI === params.itemI
        ) {
            return 'current dnd-item'
        }
        return 'dnd-item'
    }

    const { watch } = useFormContext()

    return (
        <>
            <div className="dnd-group">
                <div className="dnd-item">Header</div>
            </div>
            <div className="drag-n-drop grid grid-cols-12 gap-2">
                {list?.map((grp: IGroup, grpI: number) => (
                    <div
                        key={grp.title + grpI}
                        style={{ gridColumn: `span ${grp.column}` }}
                        className={cn(
                            // `col-span-${grp.column | 12}`,
                            'dnd-group cursor-grab'
                        )}
                        onDragEnter={
                            dragging && !grp.items.length
                                ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
                                : () => {}
                        }
                    >
                        {grp.items.map((item: any, itemI: number) => {
                            if (!watch(`${item.key}.enabled`)) return
                            return (
                                <div
                                    key={item + itemI}
                                    draggable
                                    onDragStart={(e) => {
                                        handleDragStart(e, { grpI, itemI })
                                    }}
                                    onDragEnter={
                                        dragging
                                            ? (e) =>
                                                  handleDragEnter(e, {
                                                      grpI,
                                                      itemI,
                                                  })
                                            : () => {}
                                    }
                                    className={cn(
                                        dragging
                                            ? getStyles({ grpI, itemI })
                                            : 'dnd-item'
                                    )}
                                    onDragEnd={(e) => {
                                        dragEnd(e, list)
                                    }}
                                >
                                    {item?.title}
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>
        </>
    )
}

export default DragNDrop
