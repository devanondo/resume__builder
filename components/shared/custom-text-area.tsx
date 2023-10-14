'use client'

import { popkey } from '@/lib/utils'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { ChevronDown, ChevronUp, Plus, Trash } from 'lucide-react'
import { useEffect, useRef } from 'react'
import {
    Controller,
    FieldValues,
    UseFieldArrayAppend,
    UseFieldArrayRemove,
    useFormContext,
} from 'react-hook-form'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

interface CustomTextAreaProps {
    fields: Record<'id', string>[]
    fieldArraykey?: string
    name: string
    index: number
    append: UseFieldArrayAppend<FieldValues, string | any>
    remove: UseFieldArrayRemove
    fieldTitle: string
    className?: string
}

const CustomTextArea = ({
    fields,
    name,
    index,
    append,
    remove,
    fieldTitle,
    className,
}: CustomTextAreaProps) => {
    const inputRef = useRef<HTMLTextAreaElement | null>(null)
    const { summeryPopoverKey } = useAppSelector((state) => state.popover)

    const dispatch = useAppDispatch()
    const { control } = useFormContext()

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
            handleInput()
        }
    }, [fields])

    const handleInput = () => {
        if (inputRef.current) {
            inputRef.current.style.height = `${inputRef.current.scrollHeight}px`
        }
    }
    // const divRef = useRef<ElementRef<'div'>>(null)
    // useHidePopover({
    //     divRef,
    //     disMount: () => {
    //         dispatch(showPopover(null))
    //     },
    // })

    return (
        <div className="relative w-full">
            <div
                onClick={() => {
                    // dispatch(showPopover(name + index))
                    dispatch(
                        showPopover({
                            name: popkey(name, index),
                            type: 'single__entry',
                        })
                    )
                    // popkey(name, index)
                }}
                className="w-full"
            >
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <Textarea
                            onInput={handleInput}
                            {...field}
                            ref={inputRef}
                            placeholder="What's the one thing that makes you that best candidate for this job?"
                            className={className}
                        />
                    )}
                />
            </div>

            {summeryPopoverKey === name + index && (
                <div className="p-0 rounded-[50px] overflow-hidden flex items-center w-fit border left-1/2 -top-10 -translate-x-1/2 z-10 absolute bg-white">
                    <Button
                        onClick={() => {
                            append({ [fieldTitle]: '' })
                            dispatch(
                                showPopover({
                                    name: popkey(name, fields.length),
                                    type: 'single__entry',
                                })
                            )
                        }}
                        className="flex- gap-x-2 rounded-none w-[130px]"
                    >
                        <Plus className="w-4 h-4" /> New Entry
                    </Button>

                    <Button
                        onClick={() => {
                            dispatch(
                                showPopover({
                                    name: popkey(name, index + 1),
                                    type: 'single__entry',
                                })
                            )
                        }}
                        className="flex- gap-x-2 rounded-none"
                        disabled={index === fields.length - 1}
                    >
                        <ChevronDown className="w-4 h-4" />
                    </Button>
                    <Button
                        onClick={() => {
                            dispatch(
                                showPopover({
                                    name: popkey(name, index - 1),
                                    type: 'single__entry',
                                })
                            )
                        }}
                        disabled={index === 0}
                        className="flex- gap-x-2 rounded-none"
                    >
                        <ChevronUp className="w-4 h-4" />
                    </Button>

                    <Button
                        onClick={() => {
                            remove(index)
                            if (fields.length - 1 === index) {
                                dispatch(
                                    showPopover({
                                        name: popkey(name, index - 1),
                                        type: 'single__entry',
                                    })
                                )
                            } else {
                                dispatch(
                                    showPopover({
                                        name: popkey(name, index),
                                        type: 'single__entry',
                                    })
                                )
                            }
                        }}
                        className="rounded-none"
                        variant="secondary"
                        type="button"
                    >
                        <Trash className="w-4 h-4 " />
                    </Button>
                </div>
            )}
        </div>
    )
}

export default CustomTextArea
