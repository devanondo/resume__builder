'use client'

import CustomTextArea from '@/components/shared/custom-text-area'
import { AItem } from '@/components/shared/wrapper'
import { useFieldArray, useFormContext } from 'react-hook-form'

const NestedSummery = () => {
    const { control } = useFormContext()
    const name = `summerySection.items`

    const { fields, append, remove } = useFieldArray({
        name,
        control,
    })

    return (
        <>
            {fields?.map((field: any, i: number) => {
                return (
                    <AItem
                        popoverKey={`${name}.${i}.summery0`}
                        key={field.id}
                        className="a_item"
                    >
                        <CustomTextArea
                            name={`${name}.${i}.summery`}
                            fields={fields}
                            index={i}
                            append={append}
                            remove={remove}
                            fieldTitle="summery"
                            className="text-justify"
                            placeholder={field.placeholder}
                        />
                    </AItem>
                )
            })}
        </>
    )
}

export default NestedSummery
