'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import TextBox from '@/components/resume-builder-editable-div/components/Editable'
import { cn, focusKey } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

interface SkillsKeysProps {
    name: string
    parentKey: string
}

const SkillsKeys = ({ name, parentKey }: SkillsKeysProps) => {
    const { control, setFocus, watch } = useFormContext()
    const [focusField, setFocusField] = useState('')

    const { fields, append, remove } = useFieldArray({
        name,
        control,
    })

    const { watchValue: watchParent } = useWatchForm({ name: parentKey })

    const handleKeyDown = (e: any, index: number) => {
        switch (e.key) {
            case 'Enter':
                e.preventDefault()
                append({ keyItem: '' })
                setFocusField(focusKey(name, fields.length))

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
        <div className="flex gap-x-2 gap-y-1 capitalize w-full overflow-hidden flex-wrap px-2">
            {fields.map((field: any, index: number) => (
                <div className="relative flex flex-wrap group " key={field.id}>
                    <div className="relative">
                        <TextBox
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            name={`${name}.${index}.keyItem`}
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
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkillsKeys
