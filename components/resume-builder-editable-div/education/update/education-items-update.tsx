'use client'

import { GroupItem } from '@/components/shared/wrapper'
import React, { useRef } from 'react'
import { TypographyInput } from '../../components/Typography'
import EducationItem from './education-item-update'
import { useSetHeight } from './healper'
import { ResumeComponentProps } from '../../types/resume-component-type'
import GropPopover from '@/components/popover/group-popover'
import { useAppSelector } from '@/redux/hooks'

const EducationItemsUpdate = ({ name, itemIndex }: ResumeComponentProps) => {
    const { groupPopoverKey } = useAppSelector((state) => state.popover)
    const divRef = useRef<HTMLDivElement>(null)
    useSetHeight({ divRef, name: `${name}.height` })

    return (
        <GroupItem popoverKey={name} className="relative">
            <div ref={divRef}>
                <TypographyInput
                    placeholder="Education"
                    name={`${name}.name` as const}
                    type="title"
                />
            </div>
            <EducationItem name={`${name}.items`} itemIndex={itemIndex} />
            {groupPopoverKey === name && (
                <GropPopover name={name} hasGrid={true} />
            )}
        </GroupItem>
    )
}

export default EducationItemsUpdate
