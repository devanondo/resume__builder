'use client'

import CustomTextArea from '@/components/shared/custom-text-area'
import { Dot } from 'lucide-react'
import { useFieldArray, useFormContext } from 'react-hook-form'

interface ExperienceBuletItemProps {
    name: string
}

const ExperienceBuletItem = ({ name }: ExperienceBuletItemProps) => {
    const { control } = useFormContext()

    const { fields, append, remove } = useFieldArray({
        name,
        control,
    })

    return (
        <>
            {fields.map((field, i) => (
                <div
                    key={field.id}
                    className="flex items-center gap-x-1 pl-3 w-full"
                >
                    <Dot className="w-4 h-4" />

                    <CustomTextArea
                        append={append}
                        fields={fields}
                        index={i}
                        name={`${name}.${i}.text`}
                        remove={remove}
                        fieldTitle="text"
                    />
                </div>
            ))}
        </>
    )
}

export default ExperienceBuletItem
