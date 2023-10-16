'use client'

import CustomTextArea from '@/components/shared/custom-text-area'
import { useFieldArray, useFormContext } from 'react-hook-form'

const NestedSummery = () => {
    const { control } = useFormContext()

    const { fields, append, remove } = useFieldArray({
        name: `summerySection.text`,
        control,
    })

    return (
        <>
            {fields?.map((tex, i: number) => {
                return (
                    <CustomTextArea
                        key={tex.id}
                        name={`summerySection.text.${i}.summery`}
                        fields={fields}
                        index={i}
                        append={append}
                        remove={remove}
                        fieldTitle="summery"
                        className="text-justify"
                    />
                )
            })}
        </>
    )
}

export default NestedSummery
