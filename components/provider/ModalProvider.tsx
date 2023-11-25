'use client'

import { useEffect, useState } from 'react'
import ResumeStylesDrawer from '../drawers/resume-styles-drawer'
import ChangeLayoutModal from '../modals/change-layout-modal'

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <>
            <ChangeLayoutModal />
            <ResumeStylesDrawer />
        </>
    )
}
