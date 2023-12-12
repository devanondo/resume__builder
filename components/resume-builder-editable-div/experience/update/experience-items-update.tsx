'use client'

import { GroupItem } from '@/components/shared/wrapper'
import { useRef } from 'react'
import { TypographyInput } from '../../components/Typography'
import { useSetHeight } from '../../education/update/healper'
import { ResumeComponentProps } from '../../types/resume-component-type'
import ExperienceItem from './experience-item-update'
import { useAppSelector } from '@/redux/hooks'
import GropPopover from '@/components/popover/group-popover'

const ExperienceItemsUpdate = ({ name, itemIndex }: ResumeComponentProps) => {
    const { groupPopoverKey } = useAppSelector((state) => state.popover)
    const divRef = useRef<HTMLDivElement>(null)
    useSetHeight({ divRef, name: `${name}.height` })

    return (
        <GroupItem popoverKey={name} className="relative">
            <div ref={divRef} className="w-full">
                <TypographyInput
                    placeholder="Experience"
                    name={`${name}.name` as const}
                    type="title"
                />
            </div>
            <ExperienceItem name={`${name}.items`} itemIndex={itemIndex} />
            {groupPopoverKey === name && <GropPopover name={name} />}
        </GroupItem>
    )
}

export default ExperienceItemsUpdate
