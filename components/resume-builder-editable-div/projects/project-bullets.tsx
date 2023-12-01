'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import CustomTextArea from '@/components/shared/custom-text-area'
import { AItem } from '@/components/shared/wrapper'
import { cn, popkey } from '@/lib/utils'
import { Dot } from 'lucide-react'
import { useFieldArray, useFormContext } from 'react-hook-form'

interface ProjectsBulletsItemProps {
    name: string
}

const ProjectsBulletsItem = ({ name }: ProjectsBulletsItemProps) => {
    const { control } = useFormContext()

    const { fields, append, remove } = useFieldArray({
        name: name + '.items',
        control,
    })

    const fieldName = name + '.items'

    const { watchValue } = useWatchForm({ name })

    return (
        <div className="">
            {watchValue.enabled &&
                fields?.map((field: any, i) => {
                    return (
                        <AItem
                            popoverKey={popkey(`${fieldName}.${i}.text`, i)}
                            key={field.id}
                            className="flex items-center gap-x-1 w-full"
                        >
                            {watchValue.bulet_items && (
                                <Dot className="w-4 h-4" />
                            )}

                            <CustomTextArea
                                append={append}
                                fields={fields}
                                index={i}
                                name={`${fieldName}.${i}.text`}
                                placeholder="Describe by points!"
                                remove={remove}
                                fieldTitle="text"
                                className={cn(
                                    'text-sm',
                                    watchValue.italic_items && 'italic'
                                )}
                            />
                        </AItem>
                    )
                })}
        </div>
    )
}

export default ProjectsBulletsItem
