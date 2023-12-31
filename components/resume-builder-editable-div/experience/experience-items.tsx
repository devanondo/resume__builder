/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import ExperienceGroupPopover from '@/components/popover/experience-popover'
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
import ExperienceBuletItem from './experience-bullet-item'

interface ExperienceItemProps {
    name: string
}

const ExperienceItem = ({ name }: ExperienceItemProps) => {
    const { groupPopoverKey } = useAppSelector((state) => state.popover)
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
            {fields.map((field, i) => (
                <div
                    aria-disabled={false}
                    aria-roledescription="sortable"
                    draggable
                    key={field.id}
                    onDragStart={(e) => handleDragStart(e, i)}
                    onDragEnter={(e) => handleDragEnter(e, i)}
                    className={cn(
                        dragging ? getStyles(i) : 'w-full',
                        'rounded cursor-move'
                    )}
                    onDragEnd={() => {
                        updateData()
                    }}
                >
                    <GroupItem
                        popoverKey={name + i}
                        className="relative a__item "
                    >
                        <div>
                            <TypographyInput
                                name={`${name}.${i}.position` as const}
                                className={cn(
                                    'py-0 px-2',
                                    watchValue[i]?.bold_position &&
                                        'font-normal'
                                )}
                                placeholder="Position"
                                type="subheading"
                            />

                            <TypographyInput
                                name={`${name}.${i}.workplace` as const}
                                placeholder="Workplace"
                                type="subtitle"
                            />

                            <div className="flex items-center px-2 w-full gap-x-4">
                                <div className="flex items-center w-fit ">
                                    <div className="mr-1">
                                        <SlCalender className="w-3 h-3" />
                                    </div>
                                    <div className="flex items-center">
                                        <TypographyInput
                                            name={
                                                `${name}.${i}.date.from` as const
                                            }
                                            className="w-fit !text-xs !px-0 max-w-[50px]"
                                            placeholder="From"
                                            type="paragraph"
                                            year={false}
                                            datePicker={true}
                                        />
                                        -
                                        {watchValue?.[i]?.date.is_present ? (
                                            <p className="pl-2 text-xs">
                                                Present
                                            </p>
                                        ) : (
                                            <div className="min-w-[50px]">
                                                <TypographyInput
                                                    name={
                                                        `${name}.${i}.date.to` as const
                                                    }
                                                    className="!text-xs pl-1 max-w-[50px]"
                                                    placeholder="To"
                                                    type="paragraph"
                                                    year={false}
                                                    datePicker={true}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {watchValue[i]?.show_location && (
                                    <div className="flex items-center">
                                        {/* <Calendar className="w-4 h-4" />{' '} */}
                                        <MdShareLocation className="w-3 h-3" />
                                        <TypographyInput
                                            name={
                                                `${name}.${i}.location` as const
                                            }
                                            placeholder="Address"
                                            className="w-fit !text-xs"
                                            type="paragraph"
                                        />
                                    </div>
                                )}
                            </div>

                            {watchValue[i]?.description?.enabled && (
                                <TypographyInput
                                    name={
                                        `${name}.${i}.description.text` as const
                                    }
                                    className={cn(
                                        'text-justify mt-1 mb-1 pb-1',
                                        watchValue[i].description
                                            ?.italic_description && 'italic'
                                    )}
                                    type="paragraph"
                                />
                            )}
                        </div>

                        <ExperienceBuletItem name={`${name}.${i}.bulets`} />

                        <div className="w-full px-2">
                            <div className={cn('w-full pt-1 bord_b_1')}></div>
                        </div>

                        {groupPopoverKey === name + i && (
                            <ExperienceGroupPopover
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

export default ExperienceItem
