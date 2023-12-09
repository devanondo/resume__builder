'use client'

import CustomTextArea from '@/components/shared/custom-text-area'
import { useRef } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { useSetHeight } from '../education/update/healper'
import { ResumeComponentProps } from '../types/resume-component-type'

const NestedSummery = ({ itemIndex, name }: ResumeComponentProps) => {
    const { control } = useFormContext()

    const { fields, append, remove } = useFieldArray({
        name,
        control,
    })

    return (
        <>
            {fields?.map((field: any, i: number) => {
                if (!itemIndex.includes(i)) {
                    return
                }
                return (
                    <SummeryItem
                        key={field.id}
                        fields={fields}
                        i={i}
                        append={append}
                        remove={remove}
                        field={field}
                        name={name}
                    />
                )
            })}
        </>
    )
}

export default NestedSummery

const SummeryItem = ({ name, i, fields, append, remove, field }: any) => {
    const divRef = useRef<HTMLDivElement>(null)

    useSetHeight({ divRef, name: `${name}.${i}.height` })

    return (
        <div className="a_item" ref={divRef}>
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
}
