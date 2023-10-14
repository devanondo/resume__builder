'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, X } from 'lucide-react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'

interface SkillsKeysProps {
    name: string
}

const SkillsKeys = ({ name }: SkillsKeysProps) => {
    const { control } = useFormContext()

    const { fields, append, remove } = useFieldArray({
        name,
        control,
    })

    return (
        <div className="flex gap-3 w-full overflow-hidden flex-wrap">
            {fields.map((field, index: number) => (
                <div className="relative group" key={field.id}>
                    <Controller
                        name={`${name}.${index}.keyItem` as const}
                        control={control}
                        render={({ field: f }) => (
                            <Input
                                {...f}
                                className="max-w-[150px] w-fit text-center"
                            />
                        )}
                    />
                    <div
                        onClick={() => remove(index)}
                        className="top-0 right-0 w-[20px] h-[20px] cursor-pointer absolute items-center justify-center rounded-full hidden group-hover:flex bg-black"
                    >
                        <X className="w-3 h-3 text-white" />
                    </div>
                </div>
            ))}

            <Button
                onClick={() =>
                    append({
                        keyItem: '',
                    })
                }
            >
                <Plus className="w-4 h-4" /> ADD
            </Button>
        </div>
    )
}

export default SkillsKeys
// {fields.map((item: Record<string, unknown>, index: number) => (
//     <div
//         className="font-semibold border-b-2 border-black px-2 py-1"
//         key={index}
//     >
//         {item.keyItem as string}
//     </div>
// ))}
