'use client'

import { GroupItem } from '@/components/shared/wrapper'
import { TypographyInput } from '../components/Typography'
import NestedSummery from './nested-summery'
import { ResumeComponentProps } from '../types/resume-component-type'
import { useRef } from 'react'
import { useSetHeight } from '../education/update/healper'

const ResumeSummery = ({ name, itemIndex }: ResumeComponentProps) => {
    const divRef = useRef<HTMLDivElement>(null)

    useSetHeight({ divRef, name: `${name}.height` })
    return (
        <GroupItem popoverKey={name}>
            <div ref={divRef}>
                <TypographyInput
                    placeholder="Summery"
                    name={`${name}.name` as const}
                    type="title"
                />
            </div>

            <NestedSummery name={`${name}.items`} itemIndex={itemIndex} />
        </GroupItem>
    )
}

export default ResumeSummery
