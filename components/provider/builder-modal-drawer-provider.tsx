'use client'

import { useEffect, useState } from 'react'
import ResumeAddSectionDrawer from '../drawers/add-section-drawer'
import UploadImageModal from '../modals/image-upload'
import RearrengeModal from '../modals/rearrenge-modal'

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
        </>
    )
}
