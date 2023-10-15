'use client'

import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import NestedSummery from './nested-summery'

const ResumeSummery = () => {
    const { control } = useFormContext()
    const { fields } = useFieldArray({
        name: 'summerySection',
        control,
    })

    return (
        <div>
            {fields?.map((field: any, index) => {
                return (
                    <div key={field.name}>
                        <Controller
                            name={`summerySection.${index}.name` as const}
                            control={control}
                            render={({ field: f }) => (
                                <Input
                                    className="text-3xl font-bold uppercase border-b-[5px] border-black"
                                    {...f}
                                />
                            )}
                        />

                        <NestedSummery index={index} />
                    </div>
                )
            })}
        </div>
    )
}

export default ResumeSummery
