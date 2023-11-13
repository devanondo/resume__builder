'use client'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setLayoutData } from '@/redux/slices/resume-layout-slice'
import DragDrop from '../drag-drop/DragDrop'
import { useModal } from '../hooks/use-modal-store'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'

const RearrengeModal = () => {
    const { isOpen, onClose, type } = useModal()
    const { resumeLayout } = useAppSelector((state) => state.layout)
    const dispatch = useAppDispatch()
    const isModalOpen = isOpen && type === 'openRearrenge'

    const handleClose = () => {
        onClose()
    }

    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden max-h-full">
                <DialogHeader className="pt-4 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Rearrenge Section
                    </DialogTitle>
                </DialogHeader>

                <DragDrop
                    dragEnd={(_, items) => {
                        dispatch(setLayoutData(items))
                    }}
                    items={resumeLayout}
                />
            </DialogContent>
        </Dialog>
    )
}

export default RearrengeModal
