'use client'

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
import { useEffect } from 'react'
import { Controller, useFormContext, useWatch } from 'react-hook-form'

import Text from '@/components/shared/Text'
import { GroupItem } from '@/components/shared/wrapper'
import { useAppSelector } from '@/redux/hooks'

const ResumeHeader = () => {
    const { control, watch } = useFormContext()

    const { groupPopoverKey } = useAppSelector((state) => state.popover)

    const iconMap: { [key: string]: any } = {
        phone: <Phone className="w-4 h-4" />,
        link: <Link className="w-4 h-4" />,
        extra_link: <Link className="w-4 h-4" />,
        email: <AtSign className="w-4 h-4" />,
        location: <MapPin className="w-4 h-4" />,
        extra_field: <Star className="w-4 h-4 " />,
    }

    const items = [
        {
            title: 'Show Title',
            name: 'title',
            placeholder: 'Title',
            render: 'show_title',
            col: 2,
            class: 'font-bold text-xl',
        },
        {
            title: 'Show Phone',
            name: 'phone',
            placeholder: 'Phone',
            render: 'show_phone',
            col: 1,
            class: 'font-semibold',
        },
        {
            title: 'Show Link',
            name: 'link',
            placeholder: 'LinkedIn/Portfolio',
            render: 'show_link',
            col: 1,
            class: 'font-semibold',
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
            class: 'font-semibold',
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
        <GroupItem
            popoverKey="header"
            className={cn(
                ' w-full rounded-md flex flex-col border-0 group__item'
            )}
        >
            {groupPopoverKey === 'header' && (
                <div className="absolute top-[3px] left-1/2 -translate-x-1/2 bg-white border rounded-tl-lg rounded-tr-lg px-3 py-2 flex items-center gap-x-2 border-b-0">
                    <Popover>
                        <PopoverTrigger asChild>
                            <div className="">
                                <Settings className="w-4 h-4 hover:text-green-500 cursor-pointer" />
                            </div>
                        </PopoverTrigger>

                        <PopoverContent asChild={true}>
                            <div className="">
                                {[...items, ...actions].map((action) => (
                                    <div
                                        key={action.render}
                                        className="flex justify-between items-center py-1"
                                    >
                                        <div className="text-md">
                                            {action.title}
                                        </div>
                                        <Controller
                                            name={
                                                `header.${action.render}` as const
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
                                ))}

                                <Separator className="my-4" />

                                <div className="flex justify-between items-center py-1">
                                    <div className="text-md">
                                        Uppercase name
                                    </div>
                                    <Controller
                                        name={`header.uppercase_name` as const}
                                        control={control}
                                        render={({ field: f }) => (
                                            <Switch
                                                checked={f.value}
                                                onCheckedChange={f.onChange}
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <div className="">
                        <Camera className="w-4 h-4 hover:text-green-500 cursor-pointer" />
                    </div>
                </div>
            )}

            <div className="flex gap-x-10 justify-between items-start a__item p-2 ">
                <div className="flex-1 grid grid-cols-2 gap-x-1 ">
                    <div className="col-span-2">
                        <Controller
                            name={`header.name` as const}
                            control={control}
                            render={({ field }) => (
                                <Text
                                    className={cn(
                                        'w-full resize-none outline-none text-3xl font-bold bg-transparent  border-b-5 border-black'
                                    )}
                                    {...field}
                                />
                            )}
                        />
                    </div>

                    {items.map((item) => {
                        if (!watchingValue?.[item.render]) return
                        return (
                            <div
                                className={`col-span-${item.col}`}
                                key={item.name}
                            >
                                {
                                    <div className="flex gap-x-2 items-center">
                                        {iconMap[item.name]}
                                        <Controller
                                            name={
                                                `header.${item.name}` as const
                                            }
                                            control={control}
                                            render={({ field }) => (
                                                <Text
                                                    placeholder={
                                                        item.placeholder
                                                    }
                                                    {...field}
                                                    className={cn(
                                                        'text-sm',
                                                        item.class && item.class
                                                    )}
                                                />
                                            )}
                                        />
                                    </div>
                                }
                            </div>
                        )
                    })}
                </div>

                <div className="photo w-[140px] h-[150px] rounded flex items-center justify-center border">
                    photo
                </div>
            </div>
        </GroupItem>
    )
}

export default ResumeHeader
