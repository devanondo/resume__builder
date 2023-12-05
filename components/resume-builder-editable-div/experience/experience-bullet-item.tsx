'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import CustomTextArea from '@/components/shared/custom-text-area'
import { cn } from '@/lib/utils'
import { Dot } from 'lucide-react'
import { useRef } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

interface ExperienceBuletItemProps {
    name: string
}

const ExperienceBuletItem = ({ name }: ExperienceBuletItemProps) => {
    const { control } = useFormContext()

    const { fields, append, remove } = useFieldArray({
        name: name + '.items',
        control,
    })

    const fieldName = name + '.items'

    const { watchValue } = useWatchForm({ name })

    const parentRef = useRef(null)

    return (
        <div ref={parentRef} className="-mt-1">
            {watchValue?.enabled &&
                fields?.map((field: any, i) => {
                    return (
                        <div
                            // popoverKey={popkey(`${fieldName}.${i}.text`, i)}
                            key={field.id}
                            className="flex items-start w-full"
                        >
                            {watchValue.bulet_items && (
                                <Dot className="w-4 h-4" />
                            )}

                            <CustomTextArea
                                append={append}
                                fields={fields}
                                index={i}
                                name={`${fieldName}.${i}.text`}
                                placeholder={field.placeholder}
                                remove={remove}
                                fieldTitle="text"
                                className={cn(
                                    'text-sm',
                                    watchValue.italic_items && 'italic'
                                )}
                            />
                        </div>
                    )
                })}
        </div>
    )
}

export default ExperienceBuletItem
