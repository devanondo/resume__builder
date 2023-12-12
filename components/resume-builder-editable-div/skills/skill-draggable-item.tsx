'use client'

import SkillsPopover from '@/components/popover/skills-popover'
import { GroupItem } from '@/components/shared/wrapper'
import { useAppSelector } from '@/redux/hooks'
import { useRef } from 'react'
import { TypographyInput } from '../components/Typography'
import { useSetHeight } from '../education/update/healper'
import SkillsKeys from './skills-keys'
import { cn } from '@/lib/utils'

const SkillsDraggableItem = ({
    fields,
    field,
    name,
    i,
    watchValue,
    append,
    remove,
}: any) => {
    const { groupPopoverKey } = useAppSelector((state) => state.popover)
    const divRef = useRef<HTMLDivElement>(null)

    useSetHeight({ divRef, name: `${name}.height` })

    return (
        <div ref={divRef}>
            <GroupItem popoverKey={name + i} className="relative pb-3">
                <div className="w-full">
                    {watchValue[i]?.show_title && (
                        <TypographyInput
                            placeholder={field.placeholder}
                            name={`${name}[${i}].title` as const}
                            className={cn(
                                'px-2',
                                watchValue[i].bold_title && 'font-semibold',
                                watchValue[i].italic_title && 'italic'
                            )}
                            type="subheading"
                        />
                    )}
                    <div className="pt-2">
                        <SkillsKeys
                            name={`${name}.${i}.keys`}
                            parentKey={`${name}.${i}`}
                        />
                    </div>
                </div>

                {groupPopoverKey === name + i && (
                    <SkillsPopover
                        append={append}
                        fields={fields}
                        index={i}
                        name={name}
                        remove={remove}
                    />
                )}
            </GroupItem>
        </div>
    )
}

export default SkillsDraggableItem
