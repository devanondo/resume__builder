'use client'

import Icon from '@/components/icon-picker/icon-wrapper'
import { cn } from '@/lib/utils'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { MdShareLocation } from 'react-icons/md'
import { SlCalender } from 'react-icons/sl'
import { TypographyInput } from '../../components/Typography'
import EducationPopover from './education-popover-update'
import { GroupItem } from '@/components/shared/wrapper'

const EducationDraggableItem = ({
    fields,
    field,
    name,
    i,
    watchValue,
    append,
    remove,
}: any) => {
    const dispatch = useAppDispatch()
    const { groupPopoverKey } = useAppSelector((state) => state.popover)
    const { setValue, watch } = useFormContext()

    const divRef = useRef<HTMLDivElement>(null)

    const height = divRef?.current?.offsetHeight

    const grid = watch('educations.grid')

    if (grid === 2 && divRef) {
        if (
            height &&
            Math.floor(height! / 2) !== Math.floor(watchValue[i]?.height)
        ) {
            setValue(`${name}.${i}.height`, Math.floor(height! / 2))
        }
    } else {
        if (height && height !== Math.floor(watchValue[i]?.height)) {
            setValue(`${name}.${i}.height`, Math.floor(height!))
        }
    }

    return (
        <GroupItem
            popoverKey={name + i}
            className="relative w-full "
            ref={divRef}
        >
            <div
                className="w-full flex items-start"
                onClick={() => {
                    dispatch(
                        showPopover({
                            name: name + i,
                            type: 'group__entry',
                        })
                    )
                }}
            >
                <Icon name={`${name}[${i}].icon` as const} />

                <div className="w-full">
                    <TypographyInput
                        name={`${name}[${i}].name` as const}
                        placeholder={field?.placeholder || ''}
                        className="!pl-0"
                        type="subheading"
                    />

                    <div className="flex items-start gap-x-3 justify-between pb-2 pt-[1.5px]">
                        <div className="">
                            <TypographyInput
                                name={`${name}[${i}].institution.name` as const}
                                placeholder={
                                    field?.institution?.placeholder || ''
                                }
                                className={cn('text-sm font-bold !pl-0')}
                                type="subtitle"
                            />

                            <div className="flex items-center w-full gap-x-2 flex-wrap">
                                <div className="flex items-center w-fit ">
                                    <div className="mr-1">
                                        <SlCalender className="w-3 h-3" />
                                    </div>
                                    <div className="flex items-center">
                                        <TypographyInput
                                            name={
                                                `${name}.${i}.date.from` as const
                                            }
                                            className="w-fit !text-xs !px-0 max-w-[40px] text-center"
                                            placeholder="From"
                                            type="paragraph"
                                            year={true}
                                            datePicker={true}
                                        />
                                        -
                                        {watchValue?.[i]?.date.is_present ? (
                                            <p className="pl-2 text-xs">
                                                Present
                                            </p>
                                        ) : (
                                            <div className="">
                                                <TypographyInput
                                                    name={
                                                        `${name}.${i}.date.to` as const
                                                    }
                                                    className="!text-xs  max-w-[40px] text-center"
                                                    placeholder="To"
                                                    type="paragraph"
                                                    year={true}
                                                    datePicker={true}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center w-fit ">
                                    <MdShareLocation className="w-3 h-3 mr-1" />

                                    <TypographyInput
                                        name={`${name}[${i}].location` as const}
                                        placeholder="Location"
                                        className={cn('!text-xs !px-0')}
                                        type="paragraph"
                                    />
                                </div>
                            </div>
                        </div>
                        {watchValue[i]?.institution?.enabled_gpa && (
                            <div className="border-l border-[#74767E] px-2 py-1 min-w-[120px]">
                                <TypographyInput
                                    name={
                                        `${name}[${i}].institution.gpa` as const
                                    }
                                    placeholder={
                                        field?.institution?.placeholder_gpa ||
                                        'GPA'
                                    }
                                    className={cn('!text-xs text-center mb-1')}
                                    type="paragraph"
                                />
                                <div className="flex items-center ">
                                    <TypographyInput
                                        name={
                                            `${name}[${i}].institution.gpa_score` as const
                                        }
                                        placeholder={
                                            field?.institution
                                                ?.placeholder_gpa_score ||
                                            '4.00'
                                        }
                                        className={cn(
                                            '!text-xs !font-bold text-right px-1'
                                        )}
                                        type="subtitle"
                                    />

                                    <div className="flex items-center justify-center ">
                                        /
                                    </div>

                                    <TypographyInput
                                        name={
                                            `${name}[${i}].institution.gpa_max` as const
                                        }
                                        placeholder={
                                            field?.institution
                                                ?.placeholder_gpa_max || '4.00'
                                        }
                                        className={cn(
                                            '!text-xs !font-bold px-1'
                                        )}
                                        type="paragraph"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="w-full px-2">
                <div
                    className={cn(
                        'w-full',
                        grid === 2 ? 'bord_b_2' : 'bord_b_1'
                    )}
                ></div>
            </div>

            {groupPopoverKey === name + i && (
                <EducationPopover
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

export default EducationDraggableItem
