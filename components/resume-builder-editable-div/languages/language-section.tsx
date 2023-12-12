/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { GroupItem } from '@/components/shared/wrapper'
import { TypographyInput } from '../components/Typography'
import LanguageItems from './language-items'
import { ResumeComponentProps } from '../types/resume-component-type'
import { useRef } from 'react'
import { useSetHeight } from '../education/update/healper'
import { useAppSelector } from '@/redux/hooks'
import GropPopover from '@/components/popover/group-popover'

const LanguageSection = ({ name, itemIndex }: ResumeComponentProps) => {
    const { groupPopoverKey } = useAppSelector((state) => state.popover)
    const divRef = useRef<HTMLDivElement>(null)
    useSetHeight({ divRef, name: `${name}.height` })

    return (
        <GroupItem popoverKey={name} className="relative">
            <div ref={divRef}>
                <TypographyInput
                    name={`${name}.name` as const}
                    placeholder="Languages"
                    type="title"
                />
            </div>

            <LanguageItems name={`${name}.items`} itemIndex={itemIndex} />
            {groupPopoverKey === name && (
                <GropPopover name={name} hasGrid={true} />
            )}
        </GroupItem>
    )
}

export default LanguageSection
