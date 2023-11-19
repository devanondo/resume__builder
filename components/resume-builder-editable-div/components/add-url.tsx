'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import parse from 'html-react-parser'
import { HTMLAttributes, useEffect, useRef, useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

import { FaPlus } from 'react-icons/fa'
import { RiLink } from 'react-icons/ri'

import { Controller, useFormContext } from 'react-hook-form'
import { LuAlignJustify, LuAlignLeft, LuAlignRight } from 'react-icons/lu'

interface EditableDivProps extends HTMLAttributes<HTMLDivElement> {
    value: string
    className?: string
}

const Addurl = ({
    value,
    onChange = () => {},
    className,
    ...props
}: EditableDivProps) => {
    const [content, setContent] = useState(value)

    const [modal, setModal] = useState(false)
    const [urlModal, setUrlModal] = useState(false)

    const [anchorId, setAnchorId] = useState('')
    const [existUrl, setExistUrl] = useState<string | null>()

    const [text, setText] = useState<string>()
    const [selectedStartText, setSelectedStartText] = useState<number>()
    const [selectionEndText, setSelectionEndText] = useState<number>()

    const contentEditableRef = useRef<HTMLDivElement>(null)

    const handleTextSelect = (e: any) => {
        const selection = window.getSelection()
        const text = selection!.toString()
        setContent(e.target.innerHTML)

        setText(text)
        setSelectedStartText(selection!.anchorOffset)
        setSelectionEndText(selection!.focusOffset)

        if (text) {
            setModal(true)
        }
    }
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (e.target instanceof HTMLAnchorElement && e.target.href) {
                setExistUrl(e.target.href)
                setUrlModal(true)
            }
        }

        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    })

    const handleAddClick = () => {
        const id = generateRandomIdWithDate()
        setAnchorId(id)

        if (text) {
            const anchorTag = `<a id="${id}"  href="#">${text}</a>`

            const updatedContent =
                content.substring(0, selectedStartText) +
                anchorTag +
                content.substring(selectionEndText as number)

            setContent(updatedContent)

            setUrlModal(true)
        }
    }

    const confirmUrl = () => {
        const anchor = document.getElementById(
            anchorId
        ) as HTMLAnchorElement | null

        if (anchor?.tagName === 'A') {
            anchor.href = 'google.com'

            onChange(contentEditableRef.current?.innerHTML as any)
        }

        setModal(false)
    }

    function generateRandomIdWithDate() {
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let id = ''
        const dateString = new Date()
            .toISOString()
            .slice(0, 10)
            .replace(/-/g, '')

        for (let i = 0; i < 10; i++) {
            id += characters.charAt(
                Math.floor(Math.random() * characters.length)
            )
        }

        return dateString + id
    }

    const onUrlModalClose = () => {
        setUrlModal(false)
        setExistUrl(null)
    }

    const onchange = (e: any) => {
        onChange(e.target.innerHTML)
    }

    return (
        <div
            contentEditable
            onMouseUp={handleTextSelect}
            onInput={(e) => {
                onchange(e)
            }}
            ref={contentEditableRef}
            suppressContentEditableWarning={true}
            className={className}
            {...props}
        >
            {parse(content)}

            <Popover
                open={modal}
                onOpenChange={() => {
                    setModal(false)
                }}
            >
                <PopoverTrigger></PopoverTrigger>
                <PopoverContent
                    align="center"
                    className="flex items-center gap-x-1 flex-wrap"
                >
                    <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full p-2 hover:bg-emerald-500"
                    >
                        <LuAlignLeft className="w-5 h-6" />
                    </Button>
                    <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full p-2 hover:bg-emerald-500"
                    >
                        <LuAlignRight className="w-5 h-6" />
                    </Button>
                    <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full p-2 hover:bg-emerald-500"
                    >
                        <LuAlignJustify className="w-5 h-6" />
                    </Button>
                    <Button
                        onClick={handleAddClick}
                        size="sm"
                        className="bg-red-600 rounded-full"
                    >
                        <RiLink />
                    </Button>
                </PopoverContent>
            </Popover>

            <Popover open={urlModal} onOpenChange={onUrlModalClose}>
                <PopoverTrigger></PopoverTrigger>
                <PopoverContent className="p-2 max-w-3xl">
                    <div className="flex items-center gap-x-1">
                        <Input
                            type="url"
                            value={existUrl || ''}
                            placeholder="URL"
                        />
                        <Button
                            size="sm"
                            onClick={confirmUrl}
                            className="bg-emerald-500"
                        >
                            <FaPlus />
                        </Button>
                        <Button size="sm" className="bg-red-600">
                            <FaRegTrashAlt />
                        </Button>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}

interface URLDivProps extends HTMLAttributes<HTMLDivElement> {
    name: string
    className?: string
}

const URL = ({ name, className, ...props }: URLDivProps) => {
    const { control } = useFormContext()

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field }) => {
                    return (
                        <Addurl
                            onChange={field.onChange}
                            value={field.value}
                            className={className}
                            {...props}
                        />
                    )
                }}
            />
        </>
    )
}

export default URL
