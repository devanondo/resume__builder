'use client'

import { GroupItem } from '@/components/shared/wrapper'
import { TypographyInput } from '../components/Typography'
import EducationItem from './education-item'

const EducationItems = () => {
    const name = 'educations.items'

    return (
        <GroupItem popoverKey="educations">
            <TypographyInput
                placeholder="Education"
                name={'educations.name' as const}
                type="title"
            />
            <EducationItem name={name} />
        </GroupItem>
    )
}

export default EducationItems
