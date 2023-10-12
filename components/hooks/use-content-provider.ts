import React, { useEffect } from 'react'

type ContentProviderProps = {
    divRef: React.RefObject<HTMLDivElement>
}

export const useContentProvider = ({ divRef }: ContentProviderProps) => {
    useEffect(() => {
        const resumeContainer = document.getElementById('resume-bulder')

        const handleClick = (event: Event) => {
            if (!divRef?.current?.contains(event.target as Node)) {
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
    }, [divRef])
}
