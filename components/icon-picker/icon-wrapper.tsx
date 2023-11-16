/* eslint-disable no-unused-vars */
'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Separator } from '../ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { circumIcons, colorIcon } from './icons'
import { cn } from '@/lib/utils'

interface IconWrapperProps {
    icon?: string
    onChange?: (value: any) => void
    rounded?: boolean
    radius?: number
    background?: boolean
    backgroundColor?: string
}

const IconWrapper = ({
    icon = 'FcAcceptDatabase',
    onChange = () => {},
    rounded = false,
    radius = 0,
    background = false,
    backgroundColor = '#000',
}: IconWrapperProps) => {
    const [selectIcon, setSelectIcon] = useState(icon)

    const icons = { ...colorIcon, ...circumIcons }

    return (
        <Popover>
            <PopoverTrigger
                className={cn(
                    'text-3xl',
                    rounded && 'rounded-full',
                    radius && `rounded-[${radius}]`,
                    background && `bg-[${backgroundColor}]`
                )}
            >
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

export default IconWrapper
