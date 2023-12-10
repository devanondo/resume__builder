import React, { HTMLAttributes } from 'react'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { cn } from '@/lib/utils'

interface GroupComponentProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    className?: string
    popoverKey?: string
    ref?: React.Ref<HTMLDivElement>
}

const GroupItemWrapper = ({
    children,
    popoverKey,
    className,
}: GroupComponentProps) => {
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

const GroupItem = ({
    children,
    popoverKey,
    className,
    ref,
}: GroupComponentProps) => {
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
            ref={ref}
            className={cn(
                'rounded outline outline-1 outline-transparent pt-1',
                className,
                groupPopoverKey === popoverKey && 'bg-white outline-emerald-500'
            )}
        >
            {children}
        </div>
    )
}

const AItem = ({
    children,
    className,
    popoverKey,
    ...props
}: GroupComponentProps) => {
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
