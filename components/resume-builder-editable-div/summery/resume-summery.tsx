'use client'

import { GroupItem } from '@/components/shared/wrapper'
import { TypographyInput } from '../components/Typography'
import NestedSummery from './nested-summery'
import { ResumeComponentProps } from '../types/resume-component-type'
import { useRef } from 'react'
import { useSetHeight } from '../education/update/healper'
import { useAppSelector } from '@/redux/hooks'
import GropPopover from '@/components/popover/group-popover'

const ResumeSummery = ({ name, itemIndex }: ResumeComponentProps) => {
    const divRef = useRef<HTMLDivElement>(null)
    const { groupPopoverKey } = useAppSelector((state) => state.popover)

    useSetHeight({ divRef, name: `${name}.height` })
    return (
        <GroupItem popoverKey={name} className="relative">
            <div ref={divRef}>
                <TypographyInput
                    placeholder="Summery"
                    name={`${name}.name` as const}
                    type="title"
                />
            </div>

            <NestedSummery name={`${name}.items`} itemIndex={itemIndex} />

            {groupPopoverKey === name && <GropPopover name={name} />}
        </GroupItem>
    )
}

export default ResumeSummery
