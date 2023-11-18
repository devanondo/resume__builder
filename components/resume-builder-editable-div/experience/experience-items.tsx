'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import ExperienceGroupPopover from '@/components/popover/experience-popover'
import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/redux/hooks'
import { Calendar, MapIcon } from 'lucide-react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import Paragraph from '../components/paragraph-section'
import SubHeading from '../components/sub-heading-section'
import SubTitle from '../components/sub-title-section'
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
                    className="relative a__item"
                >
                    <div>
                        <SubHeading
                            name={`${name}.${i}.position` as const}
                            className={cn(
                                'py-0 px-2',
                                watchValue[i]?.bold_position && 'font-semibold'
                            )}
                            placeholder="Position"
                        />

                        <SubTitle
                            name={`${name}.${i}.workplace` as const}
                            className="text-md font-bold px-2 italic"
                        />

                        <div className="flex items-center px-2 w-full gap-x-4">
                            {watchValue[i]?.show_location && (
                                <div className="flex items-center gap-x-1">
                                    <Calendar className="w-4 h-4" />{' '}
                                    <SubTitle
                                        name={`${name}.${i}.location` as const}
                                        className="text-sm"
                                    />
                                </div>
                            )}
                            <div className="flex items-center gap-x-1">
                                <MapIcon className="w-4 h-4" />

                                <SubTitle
                                    name={`${name}.${i}.location` as const}
                                    className="text-sm"
                                />
                            </div>
                        </div>

                        {watchValue[i]?.description.enabled && (
                            <Paragraph
                                name={`${name}.${i}.description.text` as const}
                                className={cn(
                                    ' text-sm text-justify mt-1 mb-1',
                                    watchValue[i].description
                                        .italic_description && 'italic'
                                )}
                            />
                        )}
                    </div>

                    <ExperienceBuletItem name={`${name}.${i}.bulets`} />

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
