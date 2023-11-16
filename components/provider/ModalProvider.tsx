'use client'

import { useEffect, useState } from 'react'
import RearrengeModal from '../modals/rearrenge-modal'
import ChangeLayoutModal from '../modals/change-layout-modal'
import ResumeStylesDrawer from '../drawers/resume-styles-drawer'
import ResumeAddSectionDrawer from '../drawers/add-section-drawer'

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
