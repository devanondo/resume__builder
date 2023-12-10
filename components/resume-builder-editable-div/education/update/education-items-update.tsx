'use client'

import { GroupItem } from '@/components/shared/wrapper'
import React, { useRef } from 'react'
import { TypographyInput } from '../../components/Typography'
import EducationItem from './education-item-update'
import { useSetHeight } from './healper'
import { ResumeComponentProps } from '../../types/resume-component-type'

const EducationItemsUpdate = ({ name, itemIndex }: ResumeComponentProps) => {
    const divRef = useRef<HTMLDivElement>(null)

    useSetHeight({ divRef, name: `${name}.height` })

    return (
        <GroupItem popoverKey={name}>
            <div ref={divRef}>
                <TypographyInput
                    placeholder="Education"
                    name={`${name}.name` as const}
                    type="title"
                />
            </div>
            <EducationItem name={`${name}.items`} itemIndex={itemIndex} />
        </GroupItem>
    )
}

export default EducationItemsUpdate
