'use client'

import { Button } from '@/components/ui/button'
import { useAppDispatch } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import {
    FieldValues,
    UseFieldArrayAppend,
    UseFieldArrayRemove,
} from 'react-hook-form'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Switch } from '@/components/ui/switch'
import { ChevronDown, ChevronUp, Plus, Settings, Trash } from 'lucide-react'
import { Controller, useFormContext } from 'react-hook-form'

interface ExperienceGroupPopoverProps {
    fields: Record<'id', string>[]
    fieldArraykey?: string
    name: string
    index: number
    append: UseFieldArrayAppend<FieldValues, string | any>
    remove: UseFieldArrayRemove
}

const settings = [
    {
        title: 'Show Location',
        render: 'show_location',
    },
    {
        title: 'Position Bold',
        render: 'bold_position',
    },
    {
        title: 'Show Description',
        render: 'description.enabled',
    },
    {
        title: 'Description Italic',
        render: 'description.italic_description',
    },
    {
        title: 'Show Bullet Items',
        render: 'bulets.enabled',
    },
    {
        title: 'Show Bulets',
        render: 'bulets.bulet_items',
    },
    {
        title: 'Bulets Italic',
        render: 'bulets.italic_items',
    },
]

const ExperienceGroupPopover = ({
    fields,
    name,
    index,
    append,
    remove,
}: ExperienceGroupPopoverProps) => {
    const dispatch = useAppDispatch()
    const { control } = useFormContext()

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

            <Popover>
                <PopoverTrigger className="px-3 bg-black text-white py-3">
                    <Settings className="w-4 h-4" />
                </PopoverTrigger>
                <PopoverContent>
                    {settings.map((action) => {
                        return (
                            <div
                                key={action.render}
                                className="flex justify-between items-center py-1"
                            >
                                <div className="text-md">{action.title}</div>
                                <Controller
                                    name={
                                        `${name}.${index}.${action.render}` as const
                                    }
                                    control={control}
                                    render={({ field: f }) => (
                                        <Switch
                                            checked={f.value}
                                            onCheckedChange={f.onChange}
                                        />
                                    )}
                                />
                            </div>
                        )
                    })}
                </PopoverContent>
            </Popover>

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
