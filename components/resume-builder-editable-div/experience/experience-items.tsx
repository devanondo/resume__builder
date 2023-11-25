'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import ExperienceGroupPopover from '@/components/popover/experience-popover'
import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/redux/hooks'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { BsCalendar2DateFill } from 'react-icons/bs'
import { MdShareLocation } from 'react-icons/md'
import { TypographyInput } from '../components/Typography'
import ExperienceBuletItem from './experience-bullet-item'

interface ExperienceItemProps {
    name: string
}

const ExperienceItem = ({ name }: ExperienceItemProps) => {
    const { control } = useFormContext()
    const { groupPopoverKey } = useAppSelector((state) => state.popover)

    const { fields, remove, append } = useFieldArray({
        name,
        control,
    })

    const { watchValue } = useWatchForm({ name })

    return (
        <div>
            {fields.map((field, i) => (
                <GroupItem
                    popoverKey={name + i}
                    key={field.id}
                    className="relative a__item "
                >
                    <div>
                        <TypographyInput
                            name={`${name}.${i}.position` as const}
                            className={cn(
                                'py-0 px-2',
                                watchValue[i]?.bold_position && 'font-normal'
                            )}
                            placeholder="Position"
                            type="subheading"
                        />

                        <TypographyInput
                            name={`${name}.${i}.workplace` as const}
                            placeholder="Workplace"
                            type="subtitle"
                        />

                        <div className="flex items-center px-2 w-full gap-x-4">
                            <div className="flex items-center">
                                <BsCalendar2DateFill className="w-3 h-3" />

                                <div className="flex items-center">
                                    <TypographyInput
                                        name={`${name}.${i}.date.from` as const}
                                        className="w-fit !text-xs"
                                        placeholder="From"
                                        type="paragraph"
                                    />
                                    -
                                    <TypographyInput
                                        name={`${name}.${i}.date.to` as const}
                                        className="w-fit !text-xs"
                                        placeholder="To"
                                        type="paragraph"
                                    />
                                </div>
                            </div>

                            {watchValue[i]?.show_location && (
                                <div className="flex items-center">
                                    {/* <Calendar className="w-4 h-4" />{' '} */}
                                    <MdShareLocation className="w-3 h-3" />
                                    <TypographyInput
                                        name={`${name}.${i}.location` as const}
                                        placeholder="Address"
                                        className="w-fit !text-xs"
                                        type="paragraph"
                                    />
                                </div>
                            )}
                        </div>

                        {watchValue[i]?.description.enabled && (
                            <TypographyInput
                                name={`${name}.${i}.description.text` as const}
                                className={cn(
                                    'text-justify mt-1 mb-1 pb-1',
                                    watchValue[i].description
                                        .italic_description && 'italic'
                                )}
                                type="paragraph"
                            />
                        )}
                    </div>

                    <ExperienceBuletItem name={`${name}.${i}.bulets`} />

                    {fields.length - 1 !== i ? (
                        <div className="w-full px-2">
                            <div className="border-b w-full border-dashed"></div>
                        </div>
                    ) : null}

                    {groupPopoverKey === name + i && (
                        <ExperienceGroupPopover
                            append={append}
                            fields={fields}
                            index={i}
                            name={name}
                            remove={remove}
                        />
                    )}
                </GroupItem>
            ))}
        </div>
    )
}

export default ExperienceItem
