'use client'

import { GroupItem } from '@/components/shared/wrapper'
import { useRef } from 'react'
import { TypographyInput } from '../components/Typography'
import { useSetHeight } from '../education/update/healper'
import { ResumeComponentProps } from '../types/resume-component-type'
import SkillsItems from './skills-items'

const SkillsSection = ({ name, itemIndex }: ResumeComponentProps) => {
    const divRef = useRef<HTMLDivElement>(null)

    useSetHeight({ divRef, name: `${name}.height` })

    return (
        <GroupItem popoverKey={name}>
            <div ref={divRef}>
                <TypographyInput
                    placeholder="Skills"
                    name={'skills.name' as const}
                    type="title"
                />
            </div>

            <SkillsItems name={`${name}.items`} itemIndex={itemIndex} />
        </GroupItem>
    )
}

export default SkillsSection
