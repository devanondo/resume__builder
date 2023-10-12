'use client'

import { Button } from '@/components/ui/button'
import { useAppDispatch } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import {
    FieldValues,
    UseFieldArrayAppend,
    UseFieldArrayRemove,
} from 'react-hook-form'

import { ChevronDown, ChevronUp, Plus, Trash } from 'lucide-react'

interface ExperienceGroupPopoverProps {
    fields: Record<'id', string>[]
    fieldArraykey?: string
    name: string
    index: number
    append: UseFieldArrayAppend<FieldValues, string | any>
    remove: UseFieldArrayRemove
}

const ExperienceGroupPopover = ({
    fields,
    name,
    index,
    append,
    remove,
}: ExperienceGroupPopoverProps) => {
    const dispatch = useAppDispatch()

    return (
        <div className="p-0 rounded-[50px] overflow-hidden flex items-center w-fit border left-1/2 -top-10 -translate-x-1/2 z-10 absolute bg-white">
            <Button
                onClick={() => {
                    append({
                        position: 'Position',
                        workplace: 'Workplace',
                        location: 'Location',
                        description: 'Description',
                        bulets: {
                            enabled: true,
                            name: 'bulets',
                            styles: 'styles',
                            items: [
                                {
                                    text: 'Bullets',
                                },
                            ],
                        },
                    })
                    dispatch(
                        showPopover({
                            name: name + fields.length,
                            type: 'group__entry',
                        })
                    )
                }}
                className="flex- gap-x-2 rounded-none"
            >
                <Plus className="w-4 h-4" /> New Entry
            </Button>

            <Button
                onClick={() => {
                    dispatch(
                        showPopover({
                            name: name + index + 1,
                            type: 'group__entry',
                        })
                    )
                }}
                className="flex- gap-x-2 rounded-none"
                disabled={index === fields.length - 1}
            >
                <ChevronDown className="w-4 h-4" />
            </Button>
            <Button
                onClick={() => {
                    dispatch(
                        showPopover({
                            name: name + (index - 1),
                            type: 'group__entry',
                        })
                    )
                }}
                disabled={index === 0}
                className="flex- gap-x-2 rounded-none"
            >
                <ChevronUp className="w-4 h-4" />
            </Button>

            <Button
                onClick={() => {
                    remove(index)
                    if (fields.length - 1 === index) {
                        dispatch(
                            showPopover({
                                name: name + (index - 1),
                                type: 'group__entry',
                            })
                        )
                    } else {
                        dispatch(
                            showPopover({
                                name: name + index,
                                type: 'group__entry',
                            })
                        )
                    }
                }}
                className="rounded-none"
                variant="secondary"
                type="button"
            >
                <Trash className="w-4 h-4 " />
            </Button>
        </div>
    )
}

export default ExperienceGroupPopover
