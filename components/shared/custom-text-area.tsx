'use client'

import { Button } from '@/components/ui/button'
import { cn, focusKey, popkey } from '@/lib/utils'
import { useAppDispatch } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { ChevronDown, ChevronUp, Plus, Trash } from 'lucide-react'
import {
    Controller,
    FieldValues,
    UseFieldArrayAppend,
    UseFieldArrayRemove,
    useFormContext,
} from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'

import { useEffect, useState } from 'react'
import './custom-text-area.css'

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
    // const { summeryPopoverKey } = useAppSelector((state) => state.popover)

    const dispatch = useAppDispatch()
    const { control, setFocus } = useFormContext()
    const [focusField, setFocusField] = useState('')

    useEffect(() => {
        setFocus(focusField)
    }, [setFocus, focusField])

    const handleKeydown = (e: any) => {
        switch (e.key) {
            case 'Enter':
                e.preventDefault()
                append({ [fieldTitle]: '' })
                setFocusField(focusKey(name, fields.length))

                break

            case 'Backspace':
                if (!e.target.value.length) {
                    setFocusField(focusKey(name, index))
                    remove(index)
                }

                break

            default:
                break
        }
    }

    return (
        <div className="relative w-full flex items-center custom__textarea_component">
            {/* <div
                onClick={() => {
                    dispatch(
                        showPopover({
                            name: popkey(name, index),
                            type: 'single__entry',
                        })
                    )
                }}
                className="w-full flex items-center"
            > */}
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <TextareaAutosize
                        onClick={() => {
                            dispatch(
                                showPopover({
                                    name: popkey(name, index),
                                    type: 'single__entry',
                                })
                            )
                        }}
                        onKeyDown={handleKeydown}
                        spellCheck={false}
                        {...field}
                        placeholder="What's the one thing that makes you that best candidate for this job?"
                        className={cn(
                            'custom__textarea w-full py-1 px-2 focus:bg-white resize-none outline-none bg-transparent text-sm text-[#74767E]',
                            className
                        )}
                    />
                )}
            />
            {/* </div> */}

            <div className="textarea__modal p-0 rounded-[50px] overflow-hidden flex items-center w-fit border left-1/2 -top-10 -translate-x-1/2 z-10 absolute bg-white">
                <Button
                    onClick={() => {
                        append({ [fieldTitle]: '' })
                        // dispatch(
                        //     showPopover({
                        //         name: popkey(name, fields.length),
                        //         type: 'single__entry',
                        //     })
                        // )
                        setFocusField(focusKey(name, fields.length))
                    }}
                    type="button"
                    className="flex- gap-x-2 rounded-none w-[130px]"
                >
                    <Plus className="w-4 h-4" /> New Entry
                </Button>

                <Button
                    onClick={() => {
                        setFocus(focusKey(name, index + 1))

                        // dispatch(
                        //     showPopover({
                        //         name: popkey(name, index + 1),
                        //         type: 'single__entry',
                        //     })
                        // )
                    }}
                    className="flex- gap-x-2 rounded-none"
                    disabled={index === fields.length - 1}
                    type="button"
                >
                    <ChevronDown className="w-4 h-4" />
                </Button>
                <Button
                    onClick={() => {
                        setFocus(focusKey(name, index - 1))
                        // dispatch(
                        //     showPopover({
                        //         name: popkey(name, index - 1),
                        //         type: 'single__entry',
                        //     })
                        // )
                    }}
                    disabled={index === 0}
                    className="flex- gap-x-2 rounded-none"
                    type="button"
                >
                    <ChevronUp className="w-4 h-4" />
                </Button>

                <Button
                    onClick={() => {
                        if (fields.length - 1 === index) {
                            // dispatch(
                            //     showPopover({
                            //         name: popkey(name, index - 1),
                            //         type: 'single__entry',
                            //     })
                            // )
                            setFocusField(focusKey(name, index - 1))
                        } else {
                            // dispatch(
                            //     showPopover({
                            //         name: popkey(name, index),
                            //         type: 'single__entry',
                            //     })
                            // )
                            setFocusField(focusKey(name, index))
                        }
                        remove(index)
                    }}
                    className="rounded-none"
                    variant="secondary"
                    type="button"
                >
                    <Trash className="w-4 h-4 " />
                </Button>
            </div>

            {/* {summeryPopoverKey === name + index && (
                <div className="textarea__modal p-0 rounded-[50px] overflow-hidden flex items-center w-fit border left-1/2 -top-10 -translate-x-1/2 z-10 absolute bg-white">
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
            )} */}
        </div>
    )
}

export default CustomTextArea
