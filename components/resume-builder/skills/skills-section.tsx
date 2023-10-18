'use client'

import SkillsPopover from '@/components/popover/skills-popover'
import Text from '@/components/shared/Text'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import SkillsKeys from './skills-keys'
import { useWatchForm } from '@/components/hooks/use-form-watch'
import { cn } from '@/lib/utils'
import { GroupItem } from '@/components/shared/wrapper'

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
            <Controller
                name={'skills.name' as const}
                control={control}
                defaultValue=""
                render={({ field: f }) => (
                    <Text
                        className="text-2xl font-bold uppercase rounded -mb-[10px]"
                        {...f}
                    />
                )}
            />
            {fields.map((field, i) => (
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
                            <Controller
                                key={field.id}
                                name={`${name}[${i}].title` as const}
                                control={control}
                                defaultValue=""
                                render={({ field: f }) => (
                                    <Text
                                        className={cn(
                                            'text-md font-semibold ',

                                            watchValue[i].bold_title &&
                                                'font-bold',
                                            watchValue[i].italic_title &&
                                                'italic'
                                        )}
                                        {...f}
                                    />
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
