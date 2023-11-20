'use client'

import { useEffect, useState } from 'react'
import ResumeAddSectionDrawer from '../drawers/add-section-drawer'
import ResumeStylesDrawer from '../drawers/resume-styles-drawer'
import ChangeLayoutModal from '../modals/change-layout-modal'
import RearrengeModal from '../modals/rearrenge-modal'

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
            <RearrengeModal />
            <ChangeLayoutModal />
            <ResumeStylesDrawer />
            <ResumeAddSectionDrawer />
        </>
    )
}
