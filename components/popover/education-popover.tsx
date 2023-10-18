'use client'

import { Button } from '@/components/ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Switch } from '@/components/ui/switch'
import { useAppDispatch } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import {
    Calendar,
    ChevronDown,
    ChevronUp,
    Plus,
    Settings,
    Trash,
} from 'lucide-react'
import 'react-day-picker/dist/style.css'
import {
    Controller,
    FieldValues,
    UseFieldArrayAppend,
    UseFieldArrayRemove,
    useFormContext,
} from 'react-hook-form'
import MonthYearPicker from '../shared/month-year-picker'
import { Card, CardContent } from '../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { AItem } from '../shared/wrapper'

interface EducationPopoverProps {
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
        title: 'Show Location Icon',
        render: 'show_location_icon',
    },
    {
        title: 'Show Bullets',
        render: 'bulets.enabled',
    },
]

const EducationPopover = ({
    fields,
    name,
    index,
    append,
    remove,
}: EducationPopoverProps) => {
    const dispatch = useAppDispatch()
    const { control } = useFormContext()

    return (
        <AItem className="p-0 rounded-[50px] overflow-hidden flex items-center w-fit border left-1/2 -top-10 -translate-x-1/2 z-10 absolute bg-white">
            <Button
                onClick={() => {
                    append({
                        enabled: true,
                        name: 'BSC in Computer Science Engineering',
                        placeholder: 'Degree and Field of Study!',

                        institution: {
                            name: 'Dhaka International University',
                            placeholder: 'School / University',
                            gpa: '4.00',
                            placeholder_gpa: 'CGPA',
                            gpa_score: '4.00',
                            placeholder_gpa_score: '4.00',
                            gpa_max: '4.00',
                            placeholder_gpa_max: '4.00',
                            enabled_gpa: true,
                        },
                        location: 'Dhaka, Bangladesh',
                        show_location: true,
                        show_location_icon: true,
                        date: {
                            record: 'DateRange',
                            placeholder: 'Date',
                            from: '10/12/2023',
                            to: '',
                            is_present: true,
                            date_icon: true,
                        },

                        bulets: {
                            enabled: true,
                            bulet_items: true,
                            italic_items: false,
                            name: 'bulets',
                            items: [
                                {
                                    text: 'bullet description',
                                },
                                {
                                    text: 'bullet description2',
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
                    <Calendar className="w-4 h-4" />
                </PopoverTrigger>

                <PopoverContent>
                    <Tabs defaultValue="from" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="from">From</TabsTrigger>
                            <TabsTrigger value="to">To</TabsTrigger>
                        </TabsList>

                        <TabsContent value="from">
                            <Card>
                                <CardContent>
                                    <Controller
                                        name="selectedDate"
                                        control={control}
                                        defaultValue={new Date()} // Set the default value
                                        render={({
                                            field: { value, onChange },
                                        }) => (
                                            <MonthYearPicker
                                                selectedDate={value}
                                                onDateChange={onChange}
                                            />
                                        )}
                                    />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="to">
                            <Card>
                                <CardContent>
                                    <div className="flex justify-between items-center py-1">
                                        <div className="text-md">Present</div>
                                        <Controller
                                            name={
                                                `${name}.${index}.date.is_present` as const
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
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </PopoverContent>
            </Popover>

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

export default EducationPopover
