/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import ProjectsGroupPopover from '@/components/popover/projects-popover'
import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { debounce } from 'lodash'
import { Calendar } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { RiLink } from 'react-icons/ri'
import { TypographyInput } from '../components/Typography'
import ProjectsBulletsItem from './project-bullets'
import { SlCalender } from 'react-icons/sl'
import { TiMinus } from 'react-icons/ti'

const ProjectItems = ({ name }: { name: string }) => {
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

    if (!mounted) return null
    return (
        <div className={cn('group__item__border')}>
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
                        key={field.id}
                        className="relative a__item"
                    >
                        <div>
                            <TypographyInput
                                name={`${name}.${i}.name` as const}
                                className={cn(
                                    'py-0 px-2 leading-[26px]',
                                    watchValue[i]?.bold_position &&
                                        'font-normal'
                                )}
                                placeholder="Identify Your Project!"
                                type="subheading"
                            />
                            <div className="flex items-center w-fit px-2">
                                <div className="mr-1">
                                    <SlCalender className="w-3 h-3" />
                                </div>
                                <div className="flex items-center">
                                    <TypographyInput
                                        name={`${name}.${i}.date.from` as const}
                                        className="w-fit !text-xs !px-0"
                                        placeholder="From"
                                        type="paragraph"
                                    />
                                    <TiMinus />
                                    {watchValue?.[i]?.date.is_present ? (
                                        <p className="pl-2 text-xs">Present</p>
                                    ) : (
                                        <div className="min-w-[80px]">
                                            <TypographyInput
                                                name={
                                                    `${name}.${i}.date.to` as const
                                                }
                                                className="!text-xs"
                                                placeholder="To"
                                                type="paragraph"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full flex items-center gap-x-4 text-zinc-500 flex-wrap">
                                {watchValue?.[i]?.show_link && (
                                    <div className="flex items-center px-2">
                                        <RiLink className="w-3 h-3" />

                                        <TypographyInput
                                            link={true}
                                            name={`${name}.${i}.link` as const}
                                            className="!text-xs px-2 italic underline text-zinc-500"
                                            placeholder="https://"
                                            type="paragraph"
                                        />
                                    </div>
                                )}

                                {watchValue?.[i]?.show_extra_link && (
                                    <div className="flex items-center px-2">
                                        <RiLink className="w-3 h-3" />

                                        <TypographyInput
                                            link={true}
                                            name={
                                                `${name}.${i}.extra_link` as const
                                            }
                                            className="!text-xs px-2 italic underline text-zinc-500"
                                            placeholder="https://"
                                            type="paragraph"
                                        />
                                    </div>
                                )}
                            </div>

                            {watchValue?.[i]?.description?.enabled && (
                                <TypographyInput
                                    link={true}
                                    name={
                                        `${name}.${i}.description.text` as const
                                    }
                                    className=""
                                    placeholder="Describe your Project!!"
                                    type="paragraph"
                                />
                            )}

                            {watchValue?.[i]?.bulets?.enabled && (
                                <ProjectsBulletsItem
                                    name={`${name}.${i}.bulets`}
                                />
                            )}
                        </div>

                        <div className="w-full px-2">
                            <div className={cn('w-full pt-1 bord_b_1')}></div>
                        </div>

                        {/* <ExperienceBuletItem name={`${name}.${i}.bulets`} /> */}

                        {groupPopoverKey === name + i && (
                            <ProjectsGroupPopover
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

export default ProjectItems
