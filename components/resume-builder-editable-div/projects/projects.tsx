'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { useFieldArray, useFormContext } from 'react-hook-form'

import ProjectsGroupPopover from '@/components/popover/projects-popover'
import { useAppSelector } from '@/redux/hooks'
import { Calendar } from 'lucide-react'
import { RiLink } from 'react-icons/ri'
import { TypographyInput } from '../components/Typography'
import ProjectsBulletsItem from './project-bullets'

const ProjectsItems = () => {
    const { control } = useFormContext()
    const name = 'projects.items'

    const { groupPopoverKey } = useAppSelector((state) => state.popover)

    const { fields, append, remove } = useFieldArray({
        name,
        control,
    })

    const { watchValue } = useWatchForm({ name })

    return (
        <GroupItem popoverKey="projects" className="pb-1">
            <TypographyInput
                placeholder="Projects"
                name={`projects.name` as const}
                type="title"
            />

            {fields?.map((field, i: number) => {
                return (
                    <GroupItem
                        popoverKey={name + i}
                        key={field.id}
                        className="relative a__item"
                    >
                        <div>
                            <TypographyInput
                                name={`${name}.${i}.name` as const}
                                className={cn(
                                    'py-0 px-2 leading-[26px]',
                                    watchValue[i]?.bold_position &&
                                        'font-normal'
                                )}
                                placeholder="Position"
                                type="subheading"
                            />
                            <div className="flex items-center px-2 w-full gap-x-1 text-zinc-600">
                                <div className="flex items-center">
                                    <Calendar className="w-3 h-3" />
                                    <TypographyInput
                                        name={`${name}.${i}.date.from` as const}
                                        className="!text-xs "
                                        placeholder="Form"
                                        type="paragraph"
                                    />
                                </div>
                                -
                                {watchValue?.[i]?.date.is_present ? (
                                    <p className="pl-1 text-xs">Present</p>
                                ) : (
                                    <div className="flex items-center gap-x-1">
                                        <Calendar className="w-3 h-3" />
                                        <TypographyInput
                                            name={
                                                `${name}.${i}.date.to` as const
                                            }
                                            className="!text-xs"
                                            placeholder="To"
                                            type="paragraph"
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="w-full flex items-center gap-x-4 text-zinc-500">
                                {watchValue?.[i]?.show_link && (
                                    <div className="flex items-center px-2">
                                        <RiLink className="w-3 h-3" />

                                        <TypographyInput
                                            link={true}
                                            name={`${name}.${i}.link` as const}
                                            className="!text-xs px-2 italic underline text-zinc-500"
                                            placeholder="Insert url!"
                                            type="paragraph"
                                        />
                                    </div>
                                )}

                                {watchValue?.[i]?.show_extra_link && (
                                    <div className="flex items-center px-2">
                                        <RiLink className="w-3 h-3" />

                                        <TypographyInput
                                            link={true}
                                            name={
                                                `${name}.${i}.extra_link` as const
                                            }
                                            className="!text-xs px-2 italic underline text-zinc-500"
                                            placeholder="Insert url!"
                                            type="paragraph"
                                        />
                                    </div>
                                )}
                            </div>

                            {watchValue?.[i]?.description?.enabled && (
                                <TypographyInput
                                    link={true}
                                    name={
                                        `${name}.${i}.description.text` as const
                                    }
                                    className=""
                                    placeholder="Describe your Project!!"
                                    type="paragraph"
                                />
                            )}

                            {watchValue?.[i]?.bulets?.enabled && (
                                <ProjectsBulletsItem
                                    name={`${name}.${i}.bulets`}
                                />
                            )}
                        </div>

                        {/* <ExperienceBuletItem name={`${name}.${i}.bulets`} /> */}

                        {groupPopoverKey === name + i && (
                            <ProjectsGroupPopover
                                append={append}
                                fields={fields}
                                index={i}
                                name={name}
                                remove={remove}
                            />
                        )}
                    </GroupItem>
                )
            })}
        </GroupItem>
    )
}

export default ProjectsItems
