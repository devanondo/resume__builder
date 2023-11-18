'use client'

import { GroupItem } from '@/components/shared/wrapper'
import SectionTitle from '../components/section-title'
import ExperienceItem from './experience-items'

const ExperienceSummery = () => {
    return (
        <GroupItem popoverKey="experienceSummary.name">
            <SectionTitle
                name={`experienceSummary.name` as const}
                placeholder="Experience"
            />

            <ExperienceItem name="experienceSummary.items" />
        </GroupItem>
    )
}

export default ExperienceSummery
