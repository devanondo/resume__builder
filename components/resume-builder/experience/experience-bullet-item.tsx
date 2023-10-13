'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import CustomTextArea from '@/components/shared/custom-text-area'
import { cn } from '@/lib/utils'
import { Dot } from 'lucide-react'
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

    const { watchValue } = useWatchForm({ name })

    return (
        <>
            {watchValue.enabled &&
                fields?.map((field, i) => {
                    return (
                        <div
                            key={field.id}
                            className="flex items-center gap-x-1 pl-3 w-full"
                        >
                            {watchValue.bulet_items && (
                                <Dot className="w-4 h-4" />
                            )}

                            <CustomTextArea
                                append={append}
                                fields={fields}
                                index={i}
                                name={`${name}.${i}.text`}
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
        </>
    )
}

export default ExperienceBuletItem
