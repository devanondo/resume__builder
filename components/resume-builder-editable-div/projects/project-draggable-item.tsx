'use client'

import ProjectsGroupPopover from '@/components/popover/projects-popover'
import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/redux/hooks'
import { useRef } from 'react'
import { RiLink } from 'react-icons/ri'
import { SlCalender } from 'react-icons/sl'
import { TypographyInput } from '../components/Typography'
import { useSetHeight } from '../education/update/healper'
import ProjectsBulletsItem from './project-bullets'

const ProjectDraggableItem = ({
    fields,
    name,
    i,
    watchValue,
    append,
    remove,
}: any) => {
    const { groupPopoverKey } = useAppSelector((state) => state.popover)

    const divRef = useRef<HTMLDivElement>(null)

    useSetHeight({ divRef, name: `${name}.${i}.height` })

    return (
        <GroupItem
            popoverKey={name + i}
            className="relative a__item"
            ref={divRef}
        >
            <div>
                <TypographyInput
                    name={`${name}.${i}.name` as const}
                    className={cn(
                        'py-0 px-2 leading-[26px]',
                        watchValue[i]?.bold_position && 'font-normal'
                    )}
                    placeholder="Identify Your Project!"
                    type="subheading"
                />
                <div className="flex items-center w-fit px-2">
                    <div className="mr-1">
                        <SlCalender className="w-3 h-3" />
                    </div>
                    <div className="flex items-center">
                        <TypographyInput
                            name={`${name}.${i}.date.from` as const}
                            className="w-fit !text-xs !px-0 max-w-[50px]"
                            placeholder="From"
                            type="paragraph"
                            year={false}
                            datePicker={true}
                        />
                        -
                        {watchValue?.[i]?.date.is_present ? (
                            <p className="pl-2 text-xs">Present</p>
                        ) : (
                            <div className="min-w-[50px]">
                                <TypographyInput
                                    name={`${name}.${i}.date.to` as const}
                                    className="!text-xs pl-1 max-w-[50px]"
                                    placeholder="To"
                                    type="paragraph"
                                    year={false}
                                    datePicker={true}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-full flex items-center gap-x-4 text-zinc-500 flex-wrap">
                    {watchValue?.[i]?.show_link && (
                        <div className="flex items-center px-2">
                            <RiLink className="w-3 h-3" />

                            <TypographyInput
                                link={true}
                                name={`${name}.${i}.link` as const}
                                className="!text-xs px-2 italic underline text-zinc-500"
                                placeholder="https://"
                                type="paragraph"
                            />
                        </div>
                    )}

                    {watchValue?.[i]?.show_extra_link && (
                        <div className="flex items-center px-2">
                            <RiLink className="w-3 h-3" />

                            <TypographyInput
                                link={true}
                                name={`${name}.${i}.extra_link` as const}
                                className="!text-xs px-2 italic underline text-zinc-500"
                                placeholder="https://"
                                type="paragraph"
                            />
                        </div>
                    )}
                </div>

                {watchValue?.[i]?.description?.enabled && (
                    <TypographyInput
                        link={true}
                        name={`${name}.${i}.description.text` as const}
                        className=""
                        placeholder="Describe your Project!!"
                        type="paragraph"
                    />
                )}

                {watchValue?.[i]?.bulets?.enabled && (
                    <ProjectsBulletsItem name={`${name}.${i}.bulets`} />
                )}
            </div>

            <div className="w-full px-2">
                <div className={cn('w-full pt-1 bord_b_1')}></div>
            </div>

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
}

export default ProjectDraggableItem
