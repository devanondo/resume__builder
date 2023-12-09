'use client'

import { cn } from '@/lib/utils'
import { useAppSelector } from '@/redux/hooks'
import { useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { MdShareLocation } from 'react-icons/md'
import { SlCalender } from 'react-icons/sl'
import { TypographyInput } from '../../components/Typography'
import ExperienceBuletItem from '../experience-bullet-item'
import ExperienceGroupPopover from './experience-popover-update'

const ExperienceDraggableItem = ({
    fields,
    name,
    i,
    watchValue,
    append,
    remove,
}: any) => {
    const { groupPopoverKey } = useAppSelector((state) => state.popover)
    const { setValue } = useFormContext()

    const divRef = useRef<HTMLDivElement>(null)

    const height = divRef.current?.offsetHeight

    if (height && height !== watchValue[i]?.height) {
        setValue(`${name}.${i}.height`, height)
    }

    return (
        <div ref={divRef}>
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
                    <div className="flex items-center w-fit ">
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
                            {watchValue?.[i]?.date?.is_present ? (
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

                {watchValue[i]?.description?.enabled && (
                    <TypographyInput
                        name={`${name}.${i}.description.text` as const}
                        className={cn(
                            'text-justify mt-1 mb-1 pb-1',
                            watchValue[i].description?.italic_description &&
                                'italic'
                        )}
                        type="paragraph"
                    />
                )}
            </div>

            <ExperienceBuletItem name={`${name}.${i}.bulets`} />

            <div className="w-full px-2">
                <div className={cn('w-full pt-1 bord_b_1')}></div>
            </div>

            {groupPopoverKey === name + i && (
                <ExperienceGroupPopover
                    append={append}
                    fields={fields}
                    index={i}
                    name={name}
                    remove={remove}
                />
            )}
        </div>
    )
}

export default ExperienceDraggableItem
