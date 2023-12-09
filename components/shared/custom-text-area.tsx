/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { cn, focusKey } from '@/lib/utils'
import {
    FieldValues,
    UseFieldArrayAppend,
    UseFieldArrayRemove,
} from 'react-hook-form'

import { debounce } from 'lodash'
import { useEffect, useState } from 'react'
import { TypographyInput } from '../resume-builder-editable-div/components/Typography'

interface CustomTextAreaProps {
    fields: Record<'id', string>[]
    fieldArraykey?: string
    name: string
    index: number
    append: UseFieldArrayAppend<FieldValues, string | any>
    remove: UseFieldArrayRemove
    fieldTitle: string
    className?: string
    placeholder?: string
}

const CustomTextArea = ({
    fields,
    name,
    index,
    append,
    remove,
    fieldTitle,
    className,
    placeholder,
}: CustomTextAreaProps) => {
    const [focusField, setFocusField] = useState('')

    useEffect(() => {
        if (focusField) {
            focusOnLastField()
        }
    }, [focusField])

    const focusOnLastField = () => {
        const ele = document.getElementById(focusField)
        ele?.focus()
    }

    const handleKeydown = (e: any) => {
        switch (e.key) {
            case 'Enter':
                e.preventDefault()
                append({ [fieldTitle]: '', placeholder, height: 10 })
                debounce(() => {
                    setFocusField(focusKey(name, fields.length))
                }, 50)()
                break

            case 'Backspace':
                if (!e.target?.innerHTML?.length && index !== 0) {
                    setFocusField(focusKey(name, index - 1))

                    debounce(() => {
                        remove(index)
                    }, 50)()
                }

                break

            default:
                break
        }
    }

    return (
        <div className="relative w-full flex items-center custom__textarea_component">
            <TypographyInput
                name={name}
                onKeyDown={handleKeydown}
                placeholder={placeholder}
                className={cn('py-[1px] px-2', className)}
                type="paragraph"
                id={name}
            />

            {/* <URL
                className={cn(
                    'custom__textarea w-full py-1 px-2 focus:bg-white rounded resize-none outline-none bg-transparent text-sm text-[#74767E]',
                    className
                )}
                placeholder={placeholder}
                name={name}
                onKeyDown={handleKeydown}
                spellCheck={false}
            /> */}

            {/* {summeryPopoverKey === name + index && (
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="textarea__modal p-0 rounded-[50px] overflow-hidden flex items-center w-fit border left-1/2 -top-11 -translate-x-1/2 z-10 absolute bg-white"
                >
                    <Button
                        onClick={() => {
                            append({ [fieldTitle]: '', placeholder })
                            dispatch(
                                showPopover({
                                    name: popkey(name, fields.length),
                                    type: 'single__entry',
                                })
                            )
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

                            dispatch(
                                showPopover({
                                    name: popkey(name, index + 1),
                                    type: 'single__entry',
                                })
                            )
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
                            dispatch(
                                showPopover({
                                    name: popkey(name, index - 1),
                                    type: 'single__entry',
                                })
                            )
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
                                dispatch(
                                    showPopover({
                                        name: popkey(name, index - 1),
                                        type: 'single__entry',
                                    })
                                )
                                setFocusField(focusKey(name, index - 1))
                            } else {
                                dispatch(
                                    showPopover({
                                        name: popkey(name, index),
                                        type: 'single__entry',
                                    })
                                )
                                setFocusField(focusKey(name, index))
                            }
                            remove(index)
                        }}
                        disabled={fields.length < 2}
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
