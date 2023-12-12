/* eslint-disable @next/next/no-img-element */
'use client'

import { cn } from '@/lib/utils'
import { useUpdateLayoutMutation } from '@/redux/apis/layout.api'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useFormContext } from 'react-hook-form'
import { useModal } from '../hooks/use-modal-store'
import { Card, CardContent, CardTitle } from '../ui/card'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from '../ui/sheet'
import { setActiveLayout } from '@/redux/slices/resume-layout-slice'

const ChangeLayoutModal = () => {
    const { isOpen, onClose, type } = useModal()
    const { resumeLayoutItems } = useAppSelector((state) => state.layout)
    const { setValue, watch } = useFormContext()
    const dispatch = useAppDispatch()
    const isModalOpen = isOpen && type === 'changeLayout'

    const handleClose = () => {
        onClose()
    }

    const [updateLayout] = useUpdateLayoutMutation()

    return (
        <Sheet open={isModalOpen} onOpenChange={handleClose}>
            <SheetContent side="left" className="w-[400px]">
                <SheetHeader>
                    <SheetTitle>Templates Layouts</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </SheetDescription>
                </SheetHeader>

                <div className="grid grid-cols-2 pt-5 gap-2 ">
                    {resumeLayoutItems.map((item, index) => {
                        return (
                            <Card
                                className="col-span-1 overflow-hidden cursor-pointer group"
                                key={index}
                                onClick={() => {
                                    dispatch(setActiveLayout(item.id))
                                    setValue('style.layout', item.layoutStyle)

                                    const keys = item.layout.map((itm) => {
                                        return {
                                            title: itm.title,
                                            column: itm.column,
                                        }
                                    })

                                    updateLayout({
                                        key: keys,
                                    })
                                }}
                            >
                                <CardContent className="p-2">
                                    <img
                                        src={item.imgUrl}
                                        alt={item.title}
                                        className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition"
                                    />
                                </CardContent>

                                <CardTitle
                                    className={cn(
                                        'flex items-center justify-center bg-zinc-500 px-2 py-2 text-white text-sm',

                                        watch('style.layout') ===
                                            item.layoutStyle && 'bg-green-600'

                                        // item.isActive
                                    )}
                                >
                                    {item.title}
                                </CardTitle>
                            </Card>
                        )
                    })}
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default ChangeLayoutModal
