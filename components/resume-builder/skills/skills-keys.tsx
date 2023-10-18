'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import { cn, focusKey } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

interface SkillsKeysProps {
    name: string
    parentKey: string
}

const SkillsKeys = ({ name, parentKey }: SkillsKeysProps) => {
    const { control, setFocus, setValue } = useFormContext()
    const [focusField, setFocusField] = useState('')

    const { fields, append, remove } = useFieldArray({
        name,
        control,
    })

    const { watchValue } = useWatchForm({ name })
    const { watchValue: watchParent } = useWatchForm({ name: parentKey })
    const [content, setContent] = useState('')

    const handleContentChange = (e: any, index: number) => {
        setValue(`${name}.${index}.keyItem`, e.target.innerHTML)
    }

    const handleKeyDown = (e: any, index: number) => {
        setValue(`${name}.${index}.keyItem`, e.target.innerHTML)
        switch (e.key) {
            case 'Enter':
                e.preventDefault()
                append({ keyItem: '' })
                setFocusField(focusKey(name, fields.length))
                setContent('')

                break

            case 'Backspace':
                if (!e.target?.innerHTML?.length) {
                    setFocusField(focusKey(name, index))
                    remove(index)
                }

                break

            default:
                break
        }
    }
    useEffect(() => {
        setFocus(focusField)
    }, [setFocus, focusField])

    return (
        <div className="flex gap-x-3 gap-y-2 capitalize w-full overflow-hidden flex-wrap">
            {fields.map((field: any, index: number) => (
                <div className="relative flex flex-wrap group" key={field.id}>
                    <div className="relative">
                        <div
                            suppressContentEditableWarning={true}
                            contentEditable
                            onInput={(e) => handleContentChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            data-placeholder="Key"
                            className={cn(
                                'w-fit px-3 pb-1 outline-none overflow-hidden text-center font-semibold bg-transparent',
                                !content &&
                                    !watchValue[index]?.keyItem &&
                                    'min-w-[170px]',
                                watchParent.underline_key &&
                                    ' border-b-2 border-gray-400',
                                watchParent.italic_key && ' italic',
                                watchParent.bold_key && ' font-bold'
                            )}
                        >
                            {field.keyItem}
                        </div>

                        {!content && !watchValue[index]?.keyItem && (
                            <div
                                contentEditable={false}
                                className="placehoder__text top-0 left-0 -z-10 absolute w-full text-gray-400 font-semibold text-center"
                            >
                                Tools / Technology
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkillsKeys
