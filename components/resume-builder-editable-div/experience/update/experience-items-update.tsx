'use client'

import { GroupItem } from '@/components/shared/wrapper'
import { useRef } from 'react'
import { TypographyInput } from '../../components/Typography'
import { useSetHeight } from '../../education/update/healper'
import { ResumeComponentProps } from '../../types/resume-component-type'
import ExperienceItem from './experience-item-update'

const ExperienceItemsUpdate = ({ name, itemIndex }: ResumeComponentProps) => {
    const divRef = useRef<HTMLDivElement>(null)

    useSetHeight({ divRef, name: `${name}.height` })

    return (
        <GroupItem popoverKey="experienceSummary.name">
            <div ref={divRef} className="w-full">
                <TypographyInput
                    placeholder="Experience"
                    name={`${name}.name` as const}
                    type="title"
                />
            </div>
            <ExperienceItem name={`${name}.items`} itemIndex={itemIndex} />
        </GroupItem>
    )
}

export default ExperienceItemsUpdate
