'use client'

import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import ContentEditable from './EditDiv'

// interface EditableDivProps extends HTMLAttributes<HTMLDivElement> {
//     value: string
//     className?: string
//     link?: boolean
//     href?: string
// }

// const EditableDiv = ({
//     value,
//     onChange = () => {},
//     className,
//     placeholder,
//     link,
//     href,

//     ...props
// }: EditableDivProps) => {
//     const [content, setContent] = useState(value)
//     const contentEditableRef = useRef(null)

//     // const onchange = (e: any) => {
//     //     // setContent(e.target.innerHTML)
//     //     debouncedUpdate(e)
//     // }

//     const debouncedUpdate = debounce((e) => {
//         onChange(e.target.innerHTML)
//     }, 200)

//     useEffect(() => {
//         setContent(value)

//         // handleClick(contentEditableRef)
//         return () => {}
//     }, [value])

//     const onblur = (e: any) => {
//         debouncedUpdate(e)
//         // onBlur(e.target.innerHTML)
//     }

//     // const handleClick = () => {
//     //     const contentEditableNode = contentEditableRef.current

//     //     if (!contentEditableNode) {
//     //         return
//     //     }

//     //     contentEditableNode.focus()

//     //     // Move the cursor to the end of the content
//     //     const selection = window.getSelection()
//     //     if (selection) {
//     //         selection.removeAllRanges()
//     //         const range = document.createRange()
//     //         range.selectNodeContents(contentEditableNode)
//     //         range.collapse(false)
//     //         selection.addRange(range)
//     //     }
//     // }
//     // const handleClick = (el: HTMLElement) => {
//     //     // Place the caret at the end of the element

//     //     if (!el) return
//     //     const target = document.createTextNode('')
//     //     el.appendChild(target)
//     //     // do not move caret if element was not focused
//     //     const isTargetFocused = document.activeElement === el
//     //     if (target !== null && target.nodeValue !== null && isTargetFocused) {
//     //         var sel = window.getSelection()
//     //         if (sel !== null) {
//     //             var range = document.createRange()
//     //             range.setStart(target, target.nodeValue.length)
//     //             range.collapse(true)
//     //             sel.removeAllRanges()
//     //             sel.addRange(range)
//     //         }
//     //         if (el instanceof HTMLElement) el.focus()
//     //     }
//     // }
//     // function handleClick(el: HTMLElement | null): void {
//     //     if (!el) return

//     //     // Place the caret at the end of the element
//     //     const target = document.createTextNode('')

//     //     // console.log(el)

//     //     // Append the target text node
//     //     // el.appendChild(target)

//     //     // do not move caret if element was not focused
//     //     const isTargetFocused = document.activeElement === el
//     //     if (target !== null && target.nodeValue !== null && isTargetFocused) {
//     //         const sel = window.getSelection()
//     //         if (sel !== null) {
//     //             const range = document.createRange()
//     //             range.setStart(target, target.nodeValue.length)
//     //             range.collapse(true)
//     //             sel.removeAllRanges()
//     //             sel.addRange(range)
//     //         }
//     //         if (el instanceof HTMLElement) el.focus()
//     //     }
//     // }
//     return (
//         <>
//             {!link ? (
//                 <div
//                     contentEditable={true}
//                     placeholder={placeholder}
//                     // onInput={onchange}
//                     onBlur={onblur}
//                     className={className}
//                     ref={contentEditableRef}
//                     dangerouslySetInnerHTML={{
//                         __html: content,
//                     }}
//                     // onClick={() => handleClick(contentEditableRef)}
//                     suppressContentEditableWarning={true}
//                     {...props}
//                 />
//             ) : (
//                 <a
//                     onClick={(e) => e.preventDefault()}
//                     href={href ? `mailto:${content}` : `https://${content}`}
//                     target="_blank"
//                     style={{ textDecoration: 'none', cursor: 'auto' }}
//                 >
//                     <div
//                         dangerouslySetInnerHTML={{ __html: content }}
//                         contentEditable={true}
//                         placeholder={placeholder}
//                         // onInput={onchange}
//                         onBlur={onblur}
//                         className={className}
//                         ref={contentEditableRef}
//                         // onClick={handleClick}

//                         {...props}
//                     />
//                 </a>
//             )}
//         </>
//     )
// }

// type Modify<T, R> = Pick<T, Exclude<keyof T, keyof R>> & R
// type DivProps = Modify<
//     React.JSX.IntrinsicElements['div'],
//     { onChange: (event) => void }
// >
interface TextBoxProps extends HTMLAttributes<HTMLDivElement> {
    name: string
    className?: string
    link?: boolean
    href?: string
    ref?: any
}

const TextBox = ({
    name,
    className,
    link,
    href,
    ref,
    ...props
}: TextBoxProps) => {
    const { control } = useFormContext()

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                return (
                    <>
                        {!link ? (
                            <ContentEditable
                                html={field.value} // innerHTML of the editable div
                                disabled={false} // use true to disable edition
                                onChange={field.onChange} // handle innerHTML change
                                className={cn(
                                    className,
                                    'cursor-auto px-2 editable__div__st'
                                )}
                                ref={ref}
                                {...props}
                            />
                        ) : (
                            <a
                                onClick={(e) => e.preventDefault()}
                                href={
                                    href
                                        ? `mailto:${field.value}`
                                        : `https://${field.value}`
                                }
                                target="_blank"
                                style={{
                                    textDecoration: 'none',
                                    cursor: 'auto',
                                }}
                            >
                                <ContentEditable
                                    html={field.value} // innerHTML of the editable div
                                    disabled={false} // use true to disable edition
                                    onChange={field.onChange} // handle innerHTML change
                                    className={cn(
                                        className,
                                        'cursor-auto px-2 editable__div__st'
                                    )}
                                    {...props}
                                />
                            </a>
                        )}
                    </>
                )
            }}
        />
    )
}

export default TextBox
// <EditableDiv
//     className={cn(
//         className,
//         'cursor-auto px-2 editable__div__st'
//     )}
//     onChange={field.onChange}
//     value={field.value}
//     href={href}
//     link={link}
//     {...props}
// />
