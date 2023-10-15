'use client'

import { Input } from '@/components/ui/input'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import {
    AtSign,
    Camera,
    Link,
    MapPin,
    Phone,
    Settings,
    Star,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import {
    Controller,
    useFieldArray,
    useFormContext,
    useWatch,
} from 'react-hook-form'
import { FormItem } from '../../ui/form'

const ResumeHeader = () => {
    const [editting, setEdditing] = useState<boolean>(false)
    const { control, watch } = useFormContext()

    const iconMap: { [key: string]: any } = {
        phone: <Phone className="w-4 h-4" />,
        link: <Link className="w-4 h-4" />,
        extra_link: <Link className="w-4 h-4" />,
        email: <AtSign className="w-4 h-4" />,
        location: <MapPin className="w-4 h-4" />,
        extra_field: <Star className="w-4 h-4 " />,
    }

    const { fields } = useFieldArray({
        name: 'header',
        control,
    })

    const items = [
        {
            title: 'Show Title',
            name: 'title',
            placeholder: 'Title',
            render: 'show_title',
            col: 2,
        },
        {
            title: 'Show Phone',
            name: 'phone',
            placeholder: 'Phone',
            render: 'show_phone',
            col: 1,
        },
        {
            title: 'Show Link',
            name: 'link',
            placeholder: 'LinkedIn/Portfolio',
            render: 'show_link',
            col: 1,
        },
        {
            title: 'Show Extra link',
            name: 'extra_link',
            placeholder: 'Extra Link',
            render: 'show_extraLink',
            col: 1,
        },
        {
            title: 'Show Email',
            name: 'email',
            placeholder: 'Email',
            render: 'show_email',
            col: 1,
        },
        {
            title: 'Show Location',
            name: 'location',
            placeholder: 'Location',
            render: 'show_location',
            col: 1,
        },
        {
            title: 'Show Extra Field',
            name: 'extra_field',
            placeholder: 'Extra Field',
            render: 'show_extraField',
            col: 1,
        },
    ]

    const actions = [
        {
            title: 'Show Photo',
            render: 'show_photo',
        },
    ]

    useEffect(() => {
        const subscription = watch(() => {})
        return () => subscription.unsubscribe()
    }, [watch])

    const watchingValue = useWatch({
        name: 'header',
        control,
    })

    return (
        <div
            className={cn(
                ' w-full p-2 rounded-md flex flex-col border-0',
                editting && 'bg-white'
            )}
            onClick={() => {
                setEdditing(true)
            }}
        >
            {editting && (
                <div className="absolute top-[3px] left-1/2 -translate-x-1/2 bg-white border rounded-tl-lg rounded-tr-lg px-3 py-2 flex items-center gap-x-2 border-b-0">
                    <Popover>
                        <PopoverTrigger>
                            <div className="">
                                <Settings className="w-4 h-4 hover:text-green-500 cursor-pointer" />
                            </div>
                        </PopoverTrigger>

                        <PopoverContent>
                            {fields.map((field: any, index) => {
                                return (
                                    <div key={field.name} className="">
                                        {[...items, ...actions].map(
                                            (action) => (
                                                <div
                                                    key={action.render}
                                                    className="flex justify-between items-center py-1"
                                                >
                                                    <div className="text-md">
                                                        {action.title}
                                                    </div>
                                                    <Controller
                                                        name={
                                                            `header.${index}.${action.render}` as const
                                                        }
                                                        control={control}
                                                        render={({
                                                            field: f,
                                                        }) => (
                                                            <Switch
                                                                checked={
                                                                    f.value
                                                                }
                                                                onCheckedChange={
                                                                    f.onChange
                                                                }
                                                            />
                                                        )}
                                                    />
                                                </div>
                                            )
                                        )}

                                        <Separator className="my-4" />

                                        <div className="flex justify-between items-center py-1">
                                            <div className="text-md">
                                                Uppercase name
                                            </div>
                                            <Controller
                                                name={
                                                    `header.${index}.uppercase_name` as const
                                                }
                                                control={control}
                                                render={({ field: f }) => (
                                                    <Switch
                                                        checked={f.value}
                                                        onCheckedChange={
                                                            f.onChange
                                                        }
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </PopoverContent>
                    </Popover>
                    <div className="">
                        <Camera className="w-4 h-4 hover:text-green-500 cursor-pointer" />
                    </div>
                </div>
            )}

            <FormItem>
                <div className="flex gap-x-10">
                    {fields.map((field: any, index) => {
                        return (
                            <div
                                className="grid grid-cols-2 w-full border"
                                key={field.id}
                            >
                                <div className="col-span-2">
                                    <Controller
                                        name={`header.${index}.name` as const}
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                placeholder="Write Your Name"
                                                className={cn(
                                                    'text-3xl font-bold',
                                                    watchingValue?.[index]
                                                        ?.uppercase_name
                                                        ? 'uppercase'
                                                        : 'lowercase'
                                                )}
                                            />
                                        )}
                                    />
                                </div>

                                {items.map((item) => {
                                    if (!watchingValue?.[index]?.[item.render])
                                        return
                                    return (
                                        <div
                                            className={`col-span-${item.col}`}
                                            key={item.name}
                                        >
                                            {
                                                <div className="flex gap-x-1 items-center">
                                                    {iconMap[item.name]}
                                                    <Controller
                                                        name={
                                                            `header.${index}.${item.name}` as const
                                                        }
                                                        control={control}
                                                        render={({ field }) => (
                                                            <Input
                                                                placeholder={
                                                                    item.placeholder
                                                                }
                                                                {...field}
                                                            />
                                                        )}
                                                    />
                                                </div>
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </FormItem>
        </div>
    )
}

export default ResumeHeader
