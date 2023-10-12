'use client'

import TextAreaCommon from '@/components/shared/common-text-area'
import { Input } from '@/components/ui/input'
import { Calendar, MapIcon, Plus, Trash } from 'lucide-react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import ExperienceBuletItem from './experience-bullet-item'
import { Button } from '@/components/ui/button'

interface ExperienceItemProps {
    name: string
}

const ExperienceItem = ({ name }: ExperienceItemProps) => {
    const { control } = useFormContext()

    const { fields, remove, append } = useFieldArray({
        name,
        control,
    })

    return (
        <div>
            {fields.map((field, i) => (
                <div key={field.id} className="">
                    <Controller
                        name={`${name}.${i}.position` as const}
                        control={control}
                        defaultValue=""
                        render={({ field: f }) => (
                            <Input className="text-xl" {...f} />
                        )}
                    />
                    <Controller
                        name={`${name}.${i}.workplace` as const}
                        control={control}
                        defaultValue=""
                        render={({ field: f }) => (
                            <Input className="text-xl" {...f} />
                        )}
                    />
                    <div className="flex items-center pl-3">
                        <div className="flex items-center gap-x-2">
                            <Calendar className="w-4 h-4" />{' '}
                            <Controller
                                name={`${name}.${i}.location` as const}
                                control={control}
                                defaultValue=""
                                render={({ field: f }) => (
                                    <Input
                                        className="text-sm font-bold"
                                        {...f}
                                    />
                                )}
                            />
                        </div>
                        <div className="flex items-center gap-x-2">
                            <MapIcon className="w-4 h-4" />
                            <Controller
                                name={`${name}.${i}.location` as const}
                                control={control}
                                defaultValue=""
                                render={({ field: f }) => (
                                    <Input
                                        className="text-sm font-bold"
                                        {...f}
                                    />
                                )}
                            />
                        </div>
                    </div>

                    <Controller
                        name={`${name}.${i}.description` as const}
                        control={control}
                        defaultValue=""
                        render={({ field: f }) => (
                            <TextAreaCommon
                                field={f}
                                fields={fields}
                                className="text-sm"
                            />
                        )}
                    />

                    <ExperienceBuletItem name={`${name}.${i}.bulets.items`} />

                    <Button
                        onClick={() => {
                            remove(i)
                        }}
                        className="rounded-none"
                        variant="secondary"
                        type="button"
                    >
                        <Trash className="w-4 h-4 " />
                    </Button>
                    <Button
                        onClick={() => {
                            append({
                                position: 'Position',
                                workplace: 'Workplace',
                                location: 'Location',
                                description: 'Description',
                                bulets: {
                                    enabled: true,
                                    name: 'bulets',
                                    styles: 'styles',
                                    items: [
                                        {
                                            text: 'Bullets',
                                        },
                                    ],
                                },
                            })
                        }}
                        className="rounded-none"
                        type="button"
                    >
                        <Plus className="w-4 h-4 " />
                    </Button>
                </div>
            ))}
        </div>
    )
}

export default ExperienceItem
