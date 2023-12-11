'use client'

import { GroupItem } from '@/components/shared/wrapper'

import { TypographyInput } from '../components/Typography'
import ProjectItems from './project-items'
import { ResumeComponentProps } from '../types/resume-component-type'
import { useRef } from 'react'
import { useSetHeight } from '../education/update/healper'
import { useAppSelector } from '@/redux/hooks'
import GropPopover from '@/components/popover/group-popover'

const ProjectsItems = ({ name, itemIndex }: ResumeComponentProps) => {
    const { groupPopoverKey } = useAppSelector((state) => state.popover)
    const divRef = useRef<HTMLDivElement>(null)
    useSetHeight({ divRef, name: `${name}.height` })

    return (
        <GroupItem popoverKey={name} className="pb-1 relative">
            <div ref={divRef}>
                <TypographyInput
                    placeholder="Projects"
                    name={`${name}.name` as const}
                    type="title"
                />
            </div>

            <ProjectItems name={`${name}.items`} itemIndex={itemIndex} />
            {groupPopoverKey === name && <GropPopover name={name} />}
        </GroupItem>
    )
}

export default ProjectsItems
