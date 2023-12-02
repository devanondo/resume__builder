/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import Icon from '@/components/icon-picker/icon-wrapper'
import EducationPopover from '@/components/popover/education-popover'
import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { debounce } from 'lodash'
import { useEffect, useRef, useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { MdShareLocation } from 'react-icons/md'
import { SlCalender } from 'react-icons/sl'
import { TypographyInput } from '../components/Typography'

const EducationItem = ({ name }: { name: string }) => {
    const { control, setValue } = useFormContext()
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
                return newList
            })
        }
    }

    const updateData = debounce(() => {
        setValue(name, list)
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
                gridTemplateColumns: width > 500 ? '1fr 1fr' : '1fr',
            }}
        >
            {fields.map((field: any, i) => (
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
                        className="relative w-full"
                        key={field.id + i}
                    >
                        <div
                            className="w-full flex items-start"
                            onClick={() => {
                                dispatch(
                                    showPopover({
                                        name: name + i,
                                        type: 'group__entry',
                                    })
                                )
                            }}
                        >
                            <Icon name={`${name}[${i}].icon` as const} />

                            <div className="w-full">
                                <TypographyInput
                                    name={`${name}[${i}].name` as const}
                                    placeholder={field?.placeholder || ''}
                                    className=""
                                    type="subheading"
                                />

                                <div className="flex items-start gap-x-3 justify-between pb-2 pt-[1.5px]">
                                    <div className="">
                                        <TypographyInput
                                            name={
                                                `${name}[${i}].institution.name` as const
                                            }
                                            placeholder={
                                                field?.institution
                                                    ?.placeholder || ''
                                            }
                                            className={cn(
                                                'text-sm font-bold pl-0'
                                            )}
                                            type="subtitle"
                                        />

                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <SlCalender className="w-3 h-3" />

                                                <div className="flex items-center">
                                                    <TypographyInput
                                                        name={
                                                            `${name}.${i}.date.from` as const
                                                        }
                                                        className="w-fit !text-xs pl-1"
                                                        placeholder="From"
                                                        type="paragraph"
                                                    />
                                                    -
                                                    <TypographyInput
                                                        name={
                                                            `${name}.${i}.date.to` as const
                                                        }
                                                        className="w-fit !text-xs "
                                                        placeholder="To"
                                                        type="paragraph"
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <MdShareLocation className="w-3 h-3" />

                                                <TypographyInput
                                                    name={
                                                        `${name}[${i}].location` as const
                                                    }
                                                    placeholder="Location"
                                                    className={cn('!text-xs')}
                                                    type="paragraph"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {watchValue[i]?.institution
                                        ?.enabled_gpa && (
                                        <div className="border-l border-[#74767E] w-fit px-2 py-1">
                                            <TypographyInput
                                                name={
                                                    `${name}[${i}].institution.gpa` as const
                                                }
                                                placeholder={
                                                    field?.institution
                                                        ?.placeholder_gpa ||
                                                    'GPA'
                                                }
                                                className={cn(
                                                    '!text-xs text-center mb-1'
                                                )}
                                                type="paragraph"
                                            />
                                            <div className="flex items-center -mt-2">
                                                <TypographyInput
                                                    name={
                                                        `${name}[${i}].institution.gpa_score` as const
                                                    }
                                                    placeholder={
                                                        field?.institution
                                                            ?.placeholder_gpa_score ||
                                                        '4.00'
                                                    }
                                                    className={cn(
                                                        '!text-xs !font-bold text-right px-1'
                                                    )}
                                                    type="subtitle"
                                                />

                                                <div className="flex items-center justify-center ">
                                                    /
                                                </div>

                                                <TypographyInput
                                                    name={
                                                        `${name}[${i}].institution.gpa_max` as const
                                                    }
                                                    placeholder={
                                                        field?.institution
                                                            ?.placeholder_gpa_max ||
                                                        '4.00'
                                                    }
                                                    className={cn(
                                                        '!text-xs !font-bold px-1'
                                                    )}
                                                    type="paragraph"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-2">
                            <div
                                className={cn(
                                    'w-full',
                                    width > 500 ? 'bord_b_2' : 'bord_b_1'
                                )}
                            ></div>
                        </div>

                        {groupPopoverKey === name + i && (
                            <EducationPopover
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

export default EducationItem
