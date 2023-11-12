'use client'

import { useEffect, useState } from 'react'
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
        </>
    )
}
