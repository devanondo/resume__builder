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

interface ReferencesPopoverProps {
    fields: Record<'id', string>[]
    fieldArraykey?: string
    name: string
    index: number
    append: UseFieldArrayAppend<FieldValues, string | any>
    remove: UseFieldArrayRemove
}

const settings = [
    {
        title: 'Show Email',
        render: 'show_email',
    },
    {
        title: 'Show Phone',
        render: 'show_phone',
    },
    {
        title: 'Show Address',
        render: 'show_address',
    },
]

const ReferencesPopover = ({
    fields,
    name,
    index,
    append,
    remove,
}: ReferencesPopoverProps) => {
    const dispatch = useAppDispatch()
    const { control } = useFormContext()

    return (
        <AItem className="p-0 rounded-[50px] overflow-hidden flex items-center w-fit border left-1/2 -top-10 -translate-x-1/2 z-10 absolute bg-white">
            <Button
                onClick={() => {
                    append({
                        name: '',
                        placeholder: 'Referece Name',
                        show_email: true,
                        show_phone: true,
                        show_address: true,
                        email: 'acb@example.com',
                        phone: '123-456-1234',
                        address: 'Los Angeles, LA',
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
                className="rounded-none"
                variant="secondary"
                type="button"
            >
                <Trash className="w-4 h-4 " />
            </Button>
        </AItem>
    )
}

export default ReferencesPopover