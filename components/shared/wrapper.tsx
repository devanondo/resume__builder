import React from 'react'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { cn } from '@/lib/utils'

interface GroupItemProps {
    children: React.ReactNode
    className?: string
    popoverKey?: string
}

interface AItemProps {
    children: React.ReactNode
    className?: string
    popoverKey?: string
}

const GroupItemWrapper = ({
    children,
    popoverKey,
    className,
}: GroupItemProps) => {
    const dispatch = useAppDispatch()
    const { groupPopoverKey } = useAppSelector((state) => state.popover)

    return (
        <div
            onClick={(e) => {
                e.stopPropagation()
                if (popoverKey) {
                    dispatch(
                        showPopover({
                            name: popoverKey,
                            type: 'group__entry',
                        })
                    )
                }
            }}
            className={cn(
                'rounded border border-[transparent] pt-1',
                className,
                groupPopoverKey === popoverKey && 'bg-white border-emerald-500'
            )}
        >
            {children}
        </div>
    )
}

const GroupItem = ({ children, popoverKey, className }: GroupItemProps) => {
    const dispatch = useAppDispatch()
    const { groupPopoverKey } = useAppSelector((state) => state.popover)

    return (
        <div
            onClick={(e) => {
                e.stopPropagation()
                if (popoverKey) {
                    dispatch(
                        showPopover({
                            name: popoverKey,
                            type: 'group__entry',
                        })
                    )
                }
            }}
            className={cn(
                'rounded border border-[transparent] pt-1',
                className,
                groupPopoverKey === popoverKey && 'bg-white border-emerald-500'
            )}
        >
            {children}
        </div>
    )
}

const AItem = ({ children, className, popoverKey, ...props }: AItemProps) => {
    const dispatch = useAppDispatch()
    const { summeryPopoverKey } = useAppSelector((state) => state.popover)

    return (
        <div
            onClick={(e) => {
                e.stopPropagation()
                if (popoverKey) {
                    dispatch(
                        showPopover({
                            name: popoverKey,
                            type: 'single__entry',
                        })
                    )
                }
            }}
            className={cn(
                'rounded border border-transparent hover:border-emerald-500',
                className,
                summeryPopoverKey === popoverKey && 'bg-white'
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export { GroupItem, AItem, GroupItemWrapper }
