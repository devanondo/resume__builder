'use client'

import { GroupItem } from '@/components/shared/wrapper'
import SectionTitle from '../components/section-title'
import NestedSummery from './nested-summery'

const ResumeSummery = () => {
    return (
        <GroupItem popoverKey="summerySection">
            <SectionTitle
                placeholder="Summery"
                name={`summerySection.name` as const}
            />

            <NestedSummery />
        </GroupItem>
    )
}

export default ResumeSummery
