'use client'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet'
import { bitter, lato, roboto } from '@/lib/font'
import { colors } from '@/lib/resume-data'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import { useFormContext } from 'react-hook-form'
import { useModal } from '../hooks/use-modal-store'
import { getFontLevel, getFontValue } from '../resume-styles/utils/font-design'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select'
import { Separator } from '../ui/separator'
import { Slider } from '../ui/slider'

const ResumeStylesDrawer = () => {
    const { isOpen, onClose, type } = useModal()

    const { watch, setValue } = useFormContext()

    const isDrawerOpen = isOpen && type === 'stylesDrawer'
    const handleClose = () => {
        onClose()
    }

    return (
        <Sheet open={isDrawerOpen} onOpenChange={handleClose}>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Design & Fonts</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </SheetDescription>
                </SheetHeader>

                <div className="py-5">
                    <p className="text-sm font-semibold">Page Margin</p>

                    <Slider
                        defaultValue={[watch('style.pageMarginOption')]}
                        max={60}
                        step={20}
                        className={cn('w-[100%] mt-5')}
                        onValueChange={(value) => {
                            setValue('style.pageMarginOption', value[0])
                        }}
                    />
                </div>

                <Separator />

                <div className="py-5">
                    <p className="text-sm font-semibold">Font Familly</p>

                    <Select
                        defaultValue={watch('style.fontHeading')}
                        onValueChange={(value) => {
                            setValue('style.fontHeading', value)
                        }}
                    >
                        <SelectTrigger className="my-3" id="area">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem
                                className={bitter.className}
                                value="bitter"
                            >
                                Bitter
                            </SelectItem>
                            <SelectItem
                                className={roboto.className}
                                value="roboto"
                            >
                                Roboto
                            </SelectItem>
                            <SelectItem className={lato.className} value="lato">
                                Lato
                            </SelectItem>
                        </SelectContent>
                    </Select>

                    <p className="text-sm font-semibold">Font Size</p>
                    <Slider
                        defaultValue={[getFontValue(watch('style.fontSize'))]}
                        max={4}
                        step={1}
                        className={cn('w-[100%] mt-5')}
                        onValueChange={(value) => {
                            const level = value[0]

                            setValue('style.fontSize', getFontLevel(level))
                        }}
                    />
                </div>
                <Separator />

                <div className="py-5">
                    <p className="text-sm font-semibold">Colors</p>
                    <div className="grid grid-cols-6 gap-2 mt-2">
                        {colors.map((color, i: number) => (
                            <div
                                key={color.primary + i}
                                style={{ backgroundColor: color.primary }}
                                className={`rounded-full w-full aspect-square flex items-center justify-center p-2 cursor-pointer`}
                                onClick={() => {
                                    setValue('style.colors.0', color.primary)
                                    setValue('style.colors.1', color.secondary)
                                }}
                            >
                                <div
                                    style={{ backgroundColor: color.secondary }}
                                    className={`rounded-full w-full aspect-square flex items-center justify-center bg-[${color.secondary}]`}
                                >
                                    {watch('style.colors.0') ===
                                        color.primary &&
                                    watch('style.colors.1') ===
                                        color.secondary ? (
                                        <Check
                                            strokeWidth={4}
                                            className="w-7 font-bold text-white"
                                        />
                                    ) : null}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default ResumeStylesDrawer
