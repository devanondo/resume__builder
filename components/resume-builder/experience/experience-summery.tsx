'use client'

import Text from '@/components/shared/Text'
import { GroupItem } from '@/components/shared/wrapper'
import { Controller, useFormContext } from 'react-hook-form'
import ExperienceItem from './experience-items'

const ExperienceSummery = () => {
    const { control } = useFormContext()

    return (
        <GroupItem popoverKey="experienceSummary.name">
            <Controller
                name={`experienceSummary.name` as const}
                control={control}
                defaultValue=""
                render={({ field: f }) => (
                    <Text
                        className="text-2xl font-bold uppercase rounded -mb-[10px]"
                        {...f}
                    />
                )}
            />

            <ExperienceItem name="experienceSummary.items" />
        </GroupItem>
    )
}

export default ExperienceSummery
