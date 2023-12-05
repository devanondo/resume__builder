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
import { useEffect, useState } from 'react'
import { IResumeLayout } from '../resume-builder-editable-div/types/resume-layout-types'

const RearrengeModal = () => {
    const { isOpen, onClose, type } = useModal()
    const { resumeLayout } = useAppSelector((state) => state.layout)
    const [values, setValues] = useState<IResumeLayout[] | null>(null)

    const dispatch = useAppDispatch()
    const isModalOpen = isOpen && type === 'openRearrenge'

    const handleClose = () => {
        onClose()
    }

    const [saveLayout, response] = useSaveLayoutMutation()

    useEffect(() => {
        if (response.isSuccess) {
            setValues(null)
        }
    }, [response.isSuccess])

    const debouncedUpdate = debounce(async () => {
        console.log('Mounting...')
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

    useEffect(() => {
        if (values) {
            debouncedUpdate()
        }

        return debouncedUpdate.cancel
    }, [values, debouncedUpdate])

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
                        setValues(items)
                    }}
                    items={resumeLayout}
                />
            </DialogContent>
        </Dialog>
    )
}

export default RearrengeModal
