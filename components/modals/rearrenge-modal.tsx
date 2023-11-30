/* eslint-disable no-console */
'use client'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setLayoutData } from '@/redux/slices/resume-layout-slice'
import DragDrop from '../drag-drop/DragDrop'
import { useModal } from '../hooks/use-modal-store'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { debounce } from 'lodash'
import { useSaveLayoutMutation } from '@/redux/apis/layout.api'
import { toast } from 'sonner'

const RearrengeModal = () => {
    const { isOpen, onClose, type } = useModal()
    const { resumeLayout } = useAppSelector((state) => state.layout)

    const dispatch = useAppDispatch()
    const isModalOpen = isOpen && type === 'openRearrenge'

    const handleClose = () => {
        onClose()
    }

    const [saveLayout] = useSaveLayoutMutation()

    const debouncedUpdate = debounce(async (values) => {
        try {
            await toast.promise(saveLayout({ layoutKeys: values }), {
                loading: 'Loading...',
                success: () => {
                    return 'Saved Successfully!'
                },
                error: 'Error',
            })
        } catch (error) {
            console.log(error)
        }
    }, 5000)

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
                        debouncedUpdate(items)
                    }}
                    items={resumeLayout}
                />
            </DialogContent>
        </Dialog>
    )
}

export default RearrengeModal
