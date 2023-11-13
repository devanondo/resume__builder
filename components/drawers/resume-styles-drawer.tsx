'use client'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet'
import { useModal } from '../hooks/use-modal-store'
import { Slider } from '../ui/slider'
import { cn } from '@/lib/utils'
import { Separator } from '../ui/separator'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select'
import { Check } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { changeLayoutStyles } from '@/redux/slices/resume-layout-slice'
import { getFontLevel } from '../resume-styles/utils/font-design'

const colors = [
    {
        primary: '#000',
        secondary: '#1e90ff',
    },
    {
        primary: '#000',
        secondary: '#6f7878',
    },
    {
        primary: '#124f44',
        secondary: '#3cb371',
    },
    {
        primary: '#8a0202',
        secondary: '#f96b07',
    },
    {
        primary: '#002b7f',
        secondary: '#56acf2',
    },
    {
        primary: '#19273c',
        secondary: '#3c6df0',
    },
    {
        primary: '#501e58',
        secondary: '#951dc4',
    },
    {
        primary: '#343334',
        secondary: '#00b6cb',
    },
    {
        primary: '#19273c',
        secondary: '#c4881c',
    },
]

const ResumeStylesDrawer = () => {
    const { isOpen, onClose, type } = useModal()

    const { layoutStyles } = useAppSelector((state) => state.layout)
    const dispatch = useAppDispatch()
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
                        defaultValue={[20]}
                        max={50}
                        step={10}
                        className={cn('w-[100%] mt-5')}
                        onValueChange={(value) => {
                            dispatch(
                                changeLayoutStyles({
                                    type: 'pageMargin',
                                    value: value[0].toLocaleString(),
                                })
                            )
                        }}
                    />
                </div>

                <Separator />

                <div className="py-5">
                    <p className="text-sm font-semibold">Font Familly</p>

                    <Select defaultValue="billing">
                        <SelectTrigger className="my-3" id="area">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="team">Team</SelectItem>
                            <SelectItem value="billing">Billing</SelectItem>
                            <SelectItem value="account">Account</SelectItem>
                            <SelectItem value="deployments">
                                Deployments
                            </SelectItem>
                            <SelectItem value="support">Support</SelectItem>
                        </SelectContent>
                    </Select>

                    <p className="text-sm font-semibold">Font Size</p>
                    <Slider
                        defaultValue={[2]}
                        max={5}
                        step={1}
                        className={cn('w-[100%] mt-5')}
                        onValueChange={(value) => {
                            const level = value[0]

                            dispatch(
                                changeLayoutStyles({
                                    type: 'fontSize',
                                    value: getFontLevel(level),
                                })
                            )
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
                                    dispatch(
                                        changeLayoutStyles({
                                            type: 'colors',
                                            primaryColor: color.primary,
                                            secondaryColor: color.secondary,
                                        })
                                    )
                                }}
                            >
                                <div
                                    style={{ backgroundColor: color.secondary }}
                                    className={`rounded-full w-full aspect-square flex items-center justify-center bg-[${color.secondary}]`}
                                >
                                    {layoutStyles.primaryColor ===
                                        color.primary &&
                                    layoutStyles.secondaryColor ===
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
