/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import TextBox from '@/components/resume-builder-editable-div/components/Editable'
import { cn, focusKey } from '@/lib/utils'
import { debounce } from 'lodash'
import { useEffect, useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

interface SkillsKeysProps {
    name: string
    parentKey: string
}

const SkillsKeys = ({ name, parentKey }: SkillsKeysProps) => {
    const { control, setFocus, watch } = useFormContext()

    const { fields, append, remove } = useFieldArray({
        name,
        control,
    })

    const { watchValue: watchParent } = useWatchForm({ name: parentKey })

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

    const handleKeyDown = (e: any, name: string, index: number) => {
        switch (e.key) {
            case 'Enter':
                e.preventDefault()
                append({ keyItem: '' })
                debounce(() => {
                    setFocusField(focusKey(name, fields.length))
                }, 50)()

                break

            case 'Backspace':
                if (!e.target?.innerHTML?.length) {
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
    useEffect(() => {
        setFocus(focusField)
    }, [setFocus, focusField])

    return (
        <div className="flex gap-x-2 gap-y-1 capitalize w-full overflow-hidden flex-wrap px-2">
            {fields.map((field: any, index: number) => (
                <div className="relative flex flex-wrap group " key={field.id}>
                    <div className="relative">
                        <TextBox
                            onKeyDown={(e) =>
                                handleKeyDown(
                                    e,
                                    `${name}.${index}.keyItem`,
                                    index
                                )
                            }
                            name={`${name}.${index}.keyItem`}
                            id={`${name}.${index}.keyItem`}
                            placeholder="Tools / Technology"
                            className={cn(
                                'w-fit px-2 pb-1',
                                watchParent.italic_key && 'italic',
                                watchParent.bold_key && ' font-bold'
                            )}
                            style={{
                                borderBottom: watchParent.underline_key
                                    ? `2px solid ${watch('style.colors.1')}`
                                    : 'none',
                            }}
                            isChange={true}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkillsKeys
