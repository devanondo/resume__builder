'use client'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import { Camera, Settings, Star } from 'lucide-react'
import { useEffect } from 'react'
import { Controller, useFormContext, useWatch } from 'react-hook-form'

import { GroupItem } from '@/components/shared/wrapper'
import { useAppSelector } from '@/redux/hooks'
import { PiPhoneCallFill } from 'react-icons/pi'
import Heading from '../components/heading'
import Paragraph from '../components/paragraph-section'
import SubHeading from '../components/sub-heading-section'

import { Button } from '@/components/ui/button'
import { ImLocation } from 'react-icons/im'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { RiLink } from 'react-icons/ri'

import { MdOutlineCloudUpload } from 'react-icons/md'
import { TiTrash } from 'react-icons/ti'

import { RxPerson } from 'react-icons/rx'
import { useModal } from '@/components/hooks/use-modal-store'
import Image from 'next/image'
import UploadImageModal from '@/components/modals/image-upload'

const ResumeHeader = () => {
    const { control, watch } = useFormContext()
    const { groupPopoverKey } = useAppSelector((state) => state.popover)
    const { layoutStyles } = useAppSelector((state) => state.layout)

    const { onOpen } = useModal()

    const color = layoutStyles.secondaryColor

    const iconMap: { [key: string]: any } = {
        phone: <PiPhoneCallFill className="w-3 h-3" color={color as string} />,
        link: (
            <RiLink
                className="w-3 h-3 font-extrabold"
                color={color as string}
            />
        ),
        extra_link: <RiLink className="w-3 h-3" color={color as string} />,
        email: (
            <MdOutlineAlternateEmail
                className="w-3 h-3 "
                color={color as string}
            />
        ),
        location: <ImLocation className="w-3 h-3" color={color as string} />,
        extra_field: <Star className="w-3 h-3 " color={color as string} />,
    }

    const items = [
        // {
        //     title: 'Show Title',
        //     name: 'title',
        //     placeholder: 'Title',
        //     render: 'show_title',
        //     col: 2,
        //     class: 'font-bold text-[16px]',
        // },
        {
            title: 'Show Phone',
            name: 'phone',
            placeholder: 'Phone',
            render: 'show_phone',
            col: 1,
            class: 'font-semibold',
            link: false,
        },
        {
            title: 'Show Link',
            name: 'link',
            placeholder: 'LinkedIn/Portfolio',
            render: 'show_link',
            col: 1,
            class: 'font-semibold',
            link: true,
        },
        {
            title: 'Show Extra link',
            name: 'extra_link',
            placeholder: 'Extra Link',
            render: 'show_extraLink',
            class: 'font-semibold',
            col: 1,
            link: true,
        },
        {
            title: 'Show Email',
            name: 'email',
            placeholder: 'Email',
            render: 'show_email',
            col: 1,
            class: 'font-semibold',
            link: false,
            href: 'mailto',
        },
        {
            title: 'Show Location',
            name: 'location',
            placeholder: 'Location',
            render: 'show_location',
            class: 'font-semibold',
            col: 1,
            link: false,
        },
        {
            title: 'Show Icons',
            name: 'icons',
            placeholder: 'Show Icons',
            render: 'show_icons',
            class: 'font-semibold',
            col: 1,
        },
        {
            title: 'Show Extra Field',
            name: 'extra_field',
            placeholder: 'Extra Field',
            render: 'show_extraField',
            class: 'font-semibold',
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
                ' w-full rounded-md flex flex-col border-0 group__item relative p-0'
            )}
        >
            <UploadImageModal />

            {groupPopoverKey === 'header' && (
                <div className="absolute top-[-33px] left-1/2 -translate-x-1/2 bg-white border rounded-tl-lg rounded-tr-lg px-3 py-2 flex items-center gap-x-2 border-b-0">
                    <Popover>
                        <PopoverTrigger asChild>
                            <div className="">
                                <Settings className="w-4 h-4 hover:text-green-500 cursor-pointer" />
                            </div>
                        </PopoverTrigger>

                        <PopoverContent asChild={true}>
                            <div className="">
                                <div className="flex justify-between items-center py-1">
                                    <div className="text-md">Show Role</div>
                                    <Controller
                                        name={`header.show_title` as const}
                                        control={control}
                                        render={({ field: f }) => (
                                            <Switch
                                                checked={f.value}
                                                onCheckedChange={f.onChange}
                                            />
                                        )}
                                    />
                                </div>

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
                <div
                    className="flex-1 grid  gap-x-1 "
                    style={{
                        gridTemplateColumns: `repeat(${
                            watchingValue?.show_photo ? 2 : 3
                        }, 1fr)`,
                    }}
                >
                    <Heading
                        name={`header.name` as const}
                        className={cn(
                            'col-span-2 w-full resize-none outline-none text-3xl font-bold bg-transparent  border-b-5 border-black m-0 p-0'
                        )}
                    />

                    {watchingValue?.show_title ? (
                        <SubHeading
                            name="header.title"
                            placeholder="The role you are playing for?"
                            className={`col-span-${
                                watchingValue?.show_photo ? 2 : 3
                            } font-extrabold`}
                        />
                    ) : null}

                    {items.map((item) => {
                        if (!watchingValue?.[item.render]) return
                        return (
                            <div
                                className={`col-span-${item.col}`}
                                key={item.name}
                            >
                                {
                                    <div className="flex items-center">
                                        <div className="flex items-center justify-center">
                                            {iconMap[item.name]}
                                        </div>
                                        <Paragraph
                                            name={
                                                `header.${item.name}` as const
                                            }
                                            placeholder={item.placeholder}
                                            className={cn(
                                                item.class && item.class
                                            )}
                                            link={item?.link}
                                            href={item.href}
                                        />
                                    </div>
                                }
                            </div>
                        )
                    })}
                </div>

                {watchingValue?.show_photo ? (
                    <div className="photo relative w-[140px] h-[150px] rounded flex items-center justify-center border group gap-x-2 bg-zinc-100 hover:bg-zinc-300 transition delay-200 cursor-pointer">
                        {watchingValue?.photoUrl ? (
                            <Image
                                width={150}
                                height={150}
                                src={watchingValue?.photoUrl}
                                className="w-full h-full rounded object-cover border"
                                alt="Server Image"
                            />
                        ) : (
                            <RxPerson className="w-10 h-10 text-zinc-500" />
                        )}

                        <div className="flex items-center justify-center gap-x-2 w-full h-full top-0 left-0 absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition delay-75 bg-zinc-300">
                            <Button
                                size="sm"
                                className="bg-emerald-500 p-2"
                                variant="secondary"
                                onClick={() => {
                                    onOpen({ type: 'uploadImage' })
                                }}
                                type="button"
                            >
                                <MdOutlineCloudUpload className="w-5 h-5" />
                            </Button>
                            <Button
                                size="sm"
                                className="bg-red-600  p-2"
                                variant="secondary"
                                type="button"
                            >
                                <TiTrash className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                ) : null}
            </div>
        </GroupItem>
    )
}

export default ResumeHeader
