'use client'

import { GroupItem } from '@/components/shared/wrapper'
import { TypographyInput } from '../components/Typography'
import NestedSummery from './nested-summery'

const ResumeSummery = () => {
    return (
        <GroupItem popoverKey="summerySection">
            <TypographyInput
                placeholder="Summery"
                name={`summerySection.name` as const}
                type="title"
            />

            <NestedSummery />
        </GroupItem>
    )
}

export default ResumeSummery
