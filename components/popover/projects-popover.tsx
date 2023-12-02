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
import { AItem } from '../shared/wrapper'

interface ProjectsGroupPopoverProps {
    fields: Record<'id', string>[]
    fieldArraykey?: string
    name: string
    index: number
    append: UseFieldArrayAppend<FieldValues, string | any>
    remove: UseFieldArrayRemove
}

const settings = [
    {
        title: 'Bold Name',
        render: 'bold_name',
    },
    {
        title: 'Show Link',
        render: 'show_link',
    },
    {
        title: 'Link Icon',
        render: 'link_icon',
    },
    {
        title: 'Extra Link',
        render: 'show_extra_link',
    },
    {
        title: 'Show Description',
        render: 'description.enabled',
    },
    {
        title: 'Italic Description',
        render: 'description.italic_description',
    },
    {
        title: 'Show Bullet Items',
        render: 'bulets.enabled',
    },
    {
        title: 'Show Point',
        render: 'bulets.bulet_items',
    },
    {
        title: 'Bulets Italic',
        render: 'bulets.italic_items',
    },
    {
        title: 'Is Present',
        render: 'date.is_present',
    },
]

const ProjectsGroupPopover = ({
    fields,
    name,
    index,
    append,
    remove,
}: ProjectsGroupPopoverProps) => {
    const dispatch = useAppDispatch()
    const { control } = useFormContext()

    return (
        <AItem className="p-0 rounded-[50px] overflow-hidden flex items-center w-fit border left-1/2 -top-11 -translate-x-1/2 z-10 absolute bg-white">
            <Button
                onClick={() => {
                    append({
                        name: '',
                        bold_name: false,
                        show_link: false,
                        link: '',
                        link_icon: true,
                        extra_link: '',
                        show_extra_link: false,

                        date: {
                            record: 'DateRange',
                            from: '09/2023',
                            to: '09/2023',
                            is_present: false,
                            date_icon: true,
                        },
                        description: {
                            text: '',
                            italic_description: false,
                            enabled: true,
                        },

                        bulets: {
                            enabled: true,
                            bulet_items: true,
                            italic_items: false,
                            name: 'bulets',
                            items: [
                                {
                                    text: '',
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
                className="flex- gap-x-2 rounded-none w-[130px]"
            >
                <Plus className="w-4 h-4" /> New Entry
            </Button>

            <Button
                onClick={() => {
                    dispatch(
                        showPopover({
                            name: name + (index + 1),
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
                disabled={fields.length < 2}
                className="rounded-none"
                variant="secondary"
                type="button"
            >
                <Trash className="w-4 h-4 " />
            </Button>
        </AItem>
    )
}

export default ProjectsGroupPopover
