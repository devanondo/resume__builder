'use client'

import { debounce } from 'lodash'
import { HTMLAttributes, useEffect, useRef, useState } from 'react'
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
    className,
    placeholder,
    link,
    href,

    ...props
}: EditableDivProps) => {
    const [content, setContent] = useState(value)
    const contentEditableRef = useRef(null)

    // const onchange = (e: any) => {
    //     // setContent(e.target.innerHTML)
    // }

    const debouncedUpdate = debounce((e) => {
        onChange(e.target.innerHTML)
    }, 50)

    useEffect(() => {
        setContent(value)

        // handleClick(contentEditableRef)
        return () => {}
    }, [value])

    const onblur = (e: any) => {
        debouncedUpdate(e)
        // onBlur(e.target.innerHTML)
    }

    // const handleClick = () => {
    //     const contentEditableNode = contentEditableRef.current

    //     if (!contentEditableNode) {
    //         return
    //     }

    //     contentEditableNode.focus()

    //     // Move the cursor to the end of the content
    //     const selection = window.getSelection()
    //     if (selection) {
    //         selection.removeAllRanges()
    //         const range = document.createRange()
    //         range.selectNodeContents(contentEditableNode)
    //         range.collapse(false)
    //         selection.addRange(range)
    //     }
    // }
    // const handleClick = (el: HTMLElement) => {
    //     // Place the caret at the end of the element

    //     if (!el) return
    //     const target = document.createTextNode('')
    //     el.appendChild(target)
    //     // do not move caret if element was not focused
    //     const isTargetFocused = document.activeElement === el
    //     if (target !== null && target.nodeValue !== null && isTargetFocused) {
    //         var sel = window.getSelection()
    //         if (sel !== null) {
    //             var range = document.createRange()
    //             range.setStart(target, target.nodeValue.length)
    //             range.collapse(true)
    //             sel.removeAllRanges()
    //             sel.addRange(range)
    //         }
    //         if (el instanceof HTMLElement) el.focus()
    //     }
    // }
    // function handleClick(el: HTMLElement | null): void {
    //     if (!el) return

    //     // Place the caret at the end of the element
    //     const target = document.createTextNode('')

    //     // console.log(el)

    //     // Append the target text node
    //     // el.appendChild(target)

    //     // do not move caret if element was not focused
    //     const isTargetFocused = document.activeElement === el
    //     if (target !== null && target.nodeValue !== null && isTargetFocused) {
    //         const sel = window.getSelection()
    //         if (sel !== null) {
    //             const range = document.createRange()
    //             range.setStart(target, target.nodeValue.length)
    //             range.collapse(true)
    //             sel.removeAllRanges()
    //             sel.addRange(range)
    //         }
    //         if (el instanceof HTMLElement) el.focus()
    //     }
    // }
    return (
        <>
            {!link ? (
                <div
                    contentEditable={true}
                    placeholder={placeholder}
                    // onInput={onchange}
                    onBlur={onblur}
                    className={className}
                    ref={contentEditableRef}
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                    // onClick={() => handleClick(contentEditableRef)}
                    suppressContentEditableWarning={true}
                    {...props}
                />
            ) : (
                <a
                    onClick={(e) => e.preventDefault()}
                    href={href ? `mailto:${content}` : `https://${content}`}
                    target="_blank"
                    style={{ textDecoration: 'none', cursor: 'auto' }}
                >
                    <div
                        dangerouslySetInnerHTML={{ __html: content }}
                        contentEditable={true}
                        placeholder={placeholder}
                        // onInput={onchange}
                        onBlur={onblur}
                        className={className}
                        ref={contentEditableRef}
                        // onClick={handleClick}
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
