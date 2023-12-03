'use client'

import CustomTextArea from '@/components/shared/custom-text-area'
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
                    <div
                        // popoverKey={`${name}.${i}.summery${i}`}
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
                            className="text-justify text-[#384347] text-[14px] leading-[17px]"
                            placeholder={field.placeholder}
                        />
                    </div>
                )
            })}
        </>
    )
}

export default NestedSummery
