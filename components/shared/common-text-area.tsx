'use client'

import { useEffect, useRef } from 'react'
import { ControllerRenderProps, FieldValues } from 'react-hook-form'
import { Textarea } from '../ui/textarea'

interface CommonTextAreaProps {
    className?: string
    fields: Record<'id', string>[]
    field: ControllerRenderProps<FieldValues, string | any>
    placeholder?: string
}

const TextAreaCommon = ({
    className,
    fields,
    field,
    placeholder,
}: CommonTextAreaProps) => {
    const inputRef = useRef<HTMLTextAreaElement | null>(null)

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

    return (
        <Textarea
            className={className}
            onInput={handleInput}
            {...field}
            placeholder={placeholder}
            ref={inputRef}
        />
    )
}

export default TextAreaCommon
