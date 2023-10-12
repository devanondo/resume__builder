'use client'

import { useAppDispatch } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import React, { useEffect } from 'react'

interface ContentProviderProps {
    children: React.ReactNode
    divRef: React.RefObject<HTMLDivElement>
}

const ContentProvider = ({ divRef, children }: ContentProviderProps) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const resumeContainer = document.getElementById('resume-bulder')

        const handleClick = (event: Event) => {
            if (!divRef?.current?.contains(event.target as Node)) {
                dispatch(showPopover(null))

                if (divRef.current)
                    divRef.current.style.background = 'transparent'
                if (resumeContainer) resumeContainer.style.background = '#fff'
            } else {
                divRef.current.style.background = '#fff'
                if (resumeContainer)
                    resumeContainer.style.background = '#DDDCE0'
            }
        }

        document.body.addEventListener('mousedown', handleClick)

        return () => {
            document.body.removeEventListener('mousedown', handleClick)
        }
    }, [divRef, dispatch])

    return { children }
}

export default ContentProvider
{
    /* <div
            onClick={(e) => {
                e.stopPropagation()
            }}
            ref={rf}
        >
            {children}
        </div> */
}
