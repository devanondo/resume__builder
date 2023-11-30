/* eslint-disable @next/next/no-img-element */
'use client'

import { cn } from '@/lib/utils'
import { useUpdateLayoutMutation } from '@/redux/apis/layout.api'
import { useAppSelector } from '@/redux/hooks'
import { useFormContext } from 'react-hook-form'
import { useModal } from '../hooks/use-modal-store'
import { Card, CardContent, CardTitle } from '../ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'

const ChangeLayoutModal = () => {
    const { isOpen, onClose, type } = useModal()
    const { resumeLayoutItems } = useAppSelector((state) => state.layout)
    const { setValue, watch } = useFormContext()

    const isModalOpen = isOpen && type === 'changeLayout'

    const handleClose = () => {
        onClose()
    }

    const [updateLayout] = useUpdateLayoutMutation()

    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent className="max-w-5xl bg-white text-black p-0 overflow-hidden ">
                <DialogHeader className="pt-4 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Change Layout
                    </DialogTitle>
                </DialogHeader>

                <div className="grid grid-cols-5 px-5 pb-5 gap-x-3 ">
                    {resumeLayoutItems.map((item, index) => {
                        return (
                            <Card
                                className="col-span-1 overflow-hidden cursor-pointer group"
                                key={index}
                                onClick={() => {
                                    // dispatch(setActiveLayout(item.id))
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
            </DialogContent>
        </Dialog>
    )
}

export default ChangeLayoutModal
