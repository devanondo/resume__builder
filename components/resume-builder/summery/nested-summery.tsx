'use client'

import CustomTextArea from '@/components/shared/custom-text-area'
import { AItem } from '@/components/shared/wrapper'
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
                    <AItem
                        popoverKey={`summerySection.text.${i}.summery0`}
                        key={tex.id}
                        className="a_item"
                    >
                        <CustomTextArea
                            name={`summerySection.text.${i}.summery`}
                            fields={fields}
                            index={i}
                            append={append}
                            remove={remove}
                            fieldTitle="summery"
                            className="text-justify"
                        />
                    </AItem>
                )
            })}
        </>
    )
}

export default NestedSummery
