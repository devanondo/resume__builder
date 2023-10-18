'use client'

import Text from '@/components/shared/Text'
import { Controller, useFormContext } from 'react-hook-form'
import NestedSummery from './nested-summery'
import { GroupItem } from '@/components/shared/wrapper'

const ResumeSummery = () => {
    const { control } = useFormContext()

    return (
        <GroupItem popoverKey="summerySection">
            <Controller
                name={`summerySection.name` as const}
                control={control}
                render={({ field: f }) => (
                    <Text
                        placeholder="Summery"
                        className="text-2xl font-bold uppercase rounded -mb-[10px]"
                        {...f}
                    />
                )}
            />

            <NestedSummery />
        </GroupItem>
    )
}

export default ResumeSummery
