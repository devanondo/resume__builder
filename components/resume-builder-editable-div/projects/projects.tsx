'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { useFieldArray, useFormContext } from 'react-hook-form'
import Paragraph from '../components/paragraph-section'
import SectionTitle from '../components/section-title'
import SubHeading from '../components/sub-heading-section'

import ProjectsGroupPopover from '@/components/popover/projects-popover'
import { useAppSelector } from '@/redux/hooks'
import { Calendar } from 'lucide-react'
import { RiLink } from 'react-icons/ri'
import SubTitle from '../components/sub-title-section'
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
            <SectionTitle
                placeholder="Projects"
                name={`projects.name` as const}
            />

            {fields?.map((field, i: number) => {
                return (
                    <GroupItem
                        popoverKey={name + i}
                        key={field.id}
                        className="relative a__item"
                    >
                        <div>
                            <SubHeading
                                name={`${name}.${i}.name` as const}
                                className={cn(
                                    'py-0 px-2 leading-[26px]',
                                    watchValue[i]?.bold_position &&
                                        'font-normal'
                                )}
                                placeholder="Position"
                            />
                            <div className="flex items-center px-2 w-full gap-x-1 text-zinc-600">
                                <div className="flex items-center gap-x-1">
                                    <Calendar className="w-3 h-3 text-zinc-600" />
                                    <SubTitle
                                        name={`${name}.${i}.date.from` as const}
                                        className="text-sm  text-zinc-600"
                                        placeholder="Form"
                                    />
                                </div>
                                -
                                {watchValue?.[i]?.date.is_present ? (
                                    <p className="italic text-sm font-bold">
                                        Present
                                    </p>
                                ) : (
                                    <div className="flex items-center gap-x-1">
                                        <Calendar className="w-3 h-3" />
                                        <SubTitle
                                            name={
                                                `${name}.${i}.date.to` as const
                                            }
                                            className="text-sm"
                                            placeholder="To"
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="w-full flex items-center gap-x-4 text-zinc-500">
                                {watchValue?.[i]?.show_link && (
                                    <div className="flex items-center px-2">
                                        <RiLink className="w-3 h-3" />

                                        <Paragraph
                                            link={true}
                                            name={`${name}.${i}.link` as const}
                                            className="text-xs px-2 italic underline text-zinc-500"
                                            placeholder="Insert url!"
                                        />
                                    </div>
                                )}

                                {watchValue?.[i]?.show_extra_link && (
                                    <div className="flex items-center px-2">
                                        <RiLink className="w-3 h-3" />

                                        <Paragraph
                                            link={true}
                                            name={
                                                `${name}.${i}.extra_link` as const
                                            }
                                            className="text-xs px-2 italic underline text-zinc-500"
                                            placeholder="Insert url!"
                                        />
                                    </div>
                                )}
                            </div>

                            {watchValue?.[i]?.description?.enabled && (
                                <Paragraph
                                    link={true}
                                    name={
                                        `${name}.${i}.description.text` as const
                                    }
                                    className=""
                                    placeholder="Describe your Project!!"
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
