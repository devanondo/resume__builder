/* eslint-disable no-unused-vars */
'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Separator } from '../ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { circumIcons, colorIcon } from './icons'

interface IconWrapperProps {
    icon?: string
    onChange?: (value: any) => void
    className?: string
}

interface IconProps {
    name: string
    className?: string
}

const IconWrapper = ({
    icon = 'FcAcceptDatabase',
    onChange = () => {},
    className,
}: IconWrapperProps) => {
    const [selectIcon, setSelectIcon] = useState(icon)

    const icons = { ...colorIcon, ...circumIcons }

    return (
        <Popover>
            <PopoverTrigger className={cn('text-3xl px-2', className)}>
                {icons[selectIcon]}
            </PopoverTrigger>
            <PopoverContent className="p-0">
                <Tabs defaultValue="color" className="w-full">
                    <TabsList className="w-full">
                        <TabsTrigger value="color">Color</TabsTrigger>
                        <TabsTrigger value="outline">Outline</TabsTrigger>
                    </TabsList>
                    <TabsContent value="color">
                        <div className="flex gap-2 flex-wrap justify-between h-[300px] overflow-y-auto p-3">
                            {Object.keys(icons).map((icon) => (
                                <p
                                    key={icon}
                                    onClick={() => {
                                        onChange(icon)
                                        setSelectIcon(icon)
                                    }}
                                    className="text-3xl"
                                >
                                    {icons[icon]}
                                </p>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="outline">
                        <div className="flex gap-2 flex-wrap justify-between h-[300px] overflow-y-auto p-3">
                            {Object.keys(circumIcons).map((icon) => (
                                <p
                                    key={icon}
                                    onClick={() => {
                                        onChange(icon)
                                        setSelectIcon(icon)
                                    }}
                                    className="text-3xl"
                                >
                                    {circumIcons[icon]}
                                </p>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>

                <Separator />
            </PopoverContent>
        </Popover>
    )
}

const Icon = ({ name, className }: IconProps) => {
    const { control } = useFormContext()

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: f }) => {
                return (
                    <IconWrapper
                        icon={f.value}
                        className={className}
                        onChange={f.onChange}
                    />
                )
            }}
        />
    )
}

export default Icon
