/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { GroupItem } from '@/components/shared/wrapper'
import { TypographyInput } from '../components/Typography'
import StrengthItem from './strength-items'

const StrengthSection = () => {
    const name = 'strengths.items'

    return (
        <GroupItem popoverKey="strengths">
            <TypographyInput
                placeholder="Strength"
                name={'strengths.name' as const}
                type="title"
            />

            <StrengthItem name={name} />
        </GroupItem>
    )
}

export default StrengthSection
