'use client'

import { GroupItem } from '@/components/shared/wrapper'
import { TypographyInput } from '../components/Typography'
import ExperienceItem from './experience-items'

const ExperienceSummery = () => {
    return (
        <GroupItem popoverKey="experienceSummary.name">
            <TypographyInput
                name={`experienceSummary.name` as const}
                placeholder="Experience"
                type="title"
            />

            <ExperienceItem name="experienceSummary.items" />
        </GroupItem>
    )
}

export default ExperienceSummery
