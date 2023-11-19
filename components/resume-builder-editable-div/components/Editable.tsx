/* eslint-disable no-unused-vars */
'use client'

import React, { HTMLAttributes, useEffect, useRef, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface EditableDivProps extends HTMLAttributes<HTMLDivElement> {
    value: string
    className?: string
    link?: boolean
    href?: string
}

const EditableDiv = ({
    value,
    onChange = () => {},
    onBlur = () => {},
    className,
    placeholder,
    link,
    href,

    ...props
}: EditableDivProps) => {
    const [content, setContent] = useState(value)

    const onchange = (e: any) => {
        setContent(e.target.innerHTML)
        onChange(e.target.innerHTML)
    }

    useEffect(() => {
        setContent(value)

        handleClick()
        return () => {}
    }, [value])

    const onblur = (e: any) => {
        setContent(e.target.innerHTML)
        onBlur(e.target.innerHTML)
    }

    const contentEditableRef = useRef<HTMLDivElement>(null)

    const handleClick = () => {
        const contentEditableNode = contentEditableRef.current

        if (!contentEditableNode) {
            return
        }

        contentEditableNode.focus()

        // Move the cursor to the end of the content
        const selection = window.getSelection()
        if (selection) {
            selection.removeAllRanges()
            const range = document.createRange()
            range.selectNodeContents(contentEditableNode)
            range.collapse(false)
            selection.addRange(range)
        }
    }

    return (
        <>
            {!link ? (
                <div
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                    contentEditable={true}
                    placeholder={placeholder}
                    onInput={onchange}
                    onBlur={onblur}
                    className={className}
                    ref={contentEditableRef}
                    onClick={handleClick}
                    {...props}
                />
            ) : (
                <a
                    onClick={(e) => e.preventDefault()}
                    href={href ? `mailto:${content}` : `https:${content}`}
                    style={{ textDecoration: 'none', cursor: 'auto' }}
                >
                    <div
                        dangerouslySetInnerHTML={{ __html: content }}
                        contentEditable={true}
                        placeholder={placeholder}
                        onInput={onchange}
                        onBlur={onblur}
                        className={className}
                        ref={contentEditableRef}
                        onClick={handleClick}
                        {...props}
                    />
                </a>
            )}
        </>
    )
}

interface TextBoxProps extends HTMLAttributes<HTMLDivElement> {
    name: string
    className?: string
    link?: boolean
    href?: string
}

const TextBox = ({ name, className, link, href, ...props }: TextBoxProps) => {
    const { control } = useFormContext()

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                return (
                    <EditableDiv
                        className={className}
                        onChange={field.onChange}
                        value={field.value}
                        href={href}
                        link={link}
                        {...props}
                    />
                )
            }}
        />
    )
}

export default TextBox
