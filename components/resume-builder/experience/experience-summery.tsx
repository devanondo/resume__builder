'use client'

import { Input } from '@/components/ui/input'
import { Controller, useFormContext } from 'react-hook-form'
import ExperienceItem from './experience-items'

const ExperienceSummery = () => {
    const { control } = useFormContext()

    return (
        <div>
            <Controller
                name={`experienceSummary.name` as const}
                control={control}
                defaultValue=""
                render={({ field: f }) => (
                    <Input
                        className="text-3xl font-bold uppercase border-b-[5px] border-black"
                        {...f}
                    />
                )}
            />

            <ExperienceItem name="experienceSummary.items" />
        </div>
    )
}

export default ExperienceSummery
