import React, { useEffect } from 'react'

type ContentProviderProps = {
    divRef: React.RefObject<HTMLDivElement>
    disMount: () => void
}

export const useHidePopover = ({ divRef, disMount }: ContentProviderProps) => {
    useEffect(() => {
        const handleClick = (event: Event) => {
            if (!divRef?.current?.contains(event.target as Node)) {
                // disMount()
            }
        }

        document.body.addEventListener('mousedown', handleClick)

        return () => {
            document.body.removeEventListener('mousedown', handleClick)
        }
    }, [divRef, disMount])
}
