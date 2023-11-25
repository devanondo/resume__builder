'use client'

import { useEffect, useState } from 'react'
import ResumeAddSectionDrawer from '../drawers/add-section-drawer'
import UploadImageModal from '../modals/image-upload'
import RearrengeModal from '../modals/rearrenge-modal'
import ChangeLayoutModal from '../modals/change-layout-modal'
import ResumeStylesDrawer from '../drawers/resume-styles-drawer'

export const BuilderModalDraweProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <>
            <ResumeAddSectionDrawer />
            <UploadImageModal />
            <RearrengeModal />
            <ChangeLayoutModal />
            <ResumeStylesDrawer />
        </>
    )
}
