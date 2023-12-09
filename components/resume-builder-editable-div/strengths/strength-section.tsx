/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { GroupItem } from '@/components/shared/wrapper'
import { TypographyInput } from '../components/Typography'
import StrengthItem from './strength-items'
import { ResumeComponentProps } from '../types/resume-component-type'
import { useRef } from 'react'
import { useSetHeight } from '../education/update/healper'

const StrengthSection = ({ name, itemIndex }: ResumeComponentProps) => {
    const divRef = useRef<HTMLDivElement>(null)

    useSetHeight({ divRef, name: `${name}.height` })

    // const name = 'strengths.items'

    return (
        <GroupItem popoverKey={name}>
            <div ref={divRef}>
                <TypographyInput
                    placeholder="Strength"
                    name={'strengths.name' as const}
                    type="title"
                />
            </div>

            <StrengthItem name={`${name}.items`} itemIndex={itemIndex} />
        </GroupItem>
    )
}

export default StrengthSection
