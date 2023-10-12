'use client'

import { useFieldArray, useFormContext } from 'react-hook-form'
import CustomTextArea from '../shared/custom-text-area'

interface NestedSummeryProps {
    index: number
}

const NestedSummery = ({ index }: NestedSummeryProps) => {
    const { control } = useFormContext()

    const { fields, append, remove } = useFieldArray({
        name: `summerySection[${index}].text`,
        control,
    })

    return (
        <div>
            {fields?.map((tex, i: number) => {
                return (
                    <CustomTextArea
                        key={tex.id}
                        name={`summerySection.${index}.text.${i}.summery`}
                        fields={fields}
                        index={i}
                        append={append}
                        remove={remove}
                        fieldTitle="summery"
                    />
                )
            })}
        </div>
    )
}

export default NestedSummery
