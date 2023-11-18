'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import SkillsPopover from '@/components/popover/skills-popover'
import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { useFieldArray, useFormContext } from 'react-hook-form'
import SectionTitle from '../components/section-title'
import SubHeading from '../components/sub-heading-section'
import SkillsKeys from './skills-keys'

const SkillsSection = () => {
    const { control } = useFormContext()
    const dispatch = useAppDispatch()
    const { groupPopoverKey } = useAppSelector((state) => state.popover)
    const name = 'skills.items'

    const { fields, append, remove } = useFieldArray({
        name,
        control,
    })

    const { watchValue } = useWatchForm({ name })

    return (
        <GroupItem popoverKey="skills">
            <SectionTitle placeholder="Skills" name={'skills.name' as const} />

            {fields.map((field: any, i) => (
                <GroupItem
                    popoverKey={name + i}
                    key={field.id}
                    className="relative pb-3"
                >
                    <div
                        className="w-full"
                        onClick={() => {
                            dispatch(
                                showPopover({
                                    name: name + i,
                                    type: 'group__entry',
                                })
                            )
                        }}
                    >
                        {watchValue[i]?.show_title && (
                            <SubHeading
                                placeholder={field.placeholder}
                                name={`${name}[${i}].title` as const}
                                className={cn(
                                    'text-md font-semibold px-2',

                                    watchValue[i].bold_title && 'font-bold',
                                    watchValue[i].italic_title && 'italic'
                                )}
                            />
                        )}
                        <SkillsKeys
                            name={`${name}.${i}.keys`}
                            parentKey={`${name}.${i}`}
                        />
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
            ))}
        </GroupItem>
    )
}

export default SkillsSection
