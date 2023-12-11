'use client'

import { useAppDispatch } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { ArrowUpDown, Trash } from 'lucide-react'
import { useFormContext } from 'react-hook-form'
import { CiGrid2V } from 'react-icons/ci'
import { FiLayout } from 'react-icons/fi'
import { useModal } from '../hooks/use-modal-store'
import ActionTooltip from '../shared/action-tooltip'
import { AItem } from '../shared/wrapper'
import { Button } from '../ui/button'

interface GroupPopoverProps {
    name: string
    hasGrid?: boolean
}

const GropPopover = ({ name, hasGrid }: GroupPopoverProps) => {
    const dispatch = useAppDispatch()
    const { watch, setValue } = useFormContext()
    const { onOpen } = useModal()

    const section = watch(name)

    return (
        <AItem
            style={{
                boxShadow: 'rgba(100, 100, 111, 0.4) 0px 7px 29px 0px',
            }}
            className="p-0 rounded-[50px] flex items-center w-fit border left-1/2 -top-11 -translate-x-1/2 z-10 absolute bg-white"
        >
            <ActionTooltip side="top" align="center" label="Remove">
                <Button
                    onClick={() => {
                        setValue(`${name}.enabled`, false)
                        dispatch(showPopover(null))
                    }}
                    className="rounded-none rounded-l-[50px] pr-0 group"
                    variant="secondary"
                    type="button"
                >
                    <Trash className="w-5 h-5 group-hover:text-black transition text-emerald-500" />
                </Button>
            </ActionTooltip>

            <ActionTooltip side="top" align="center" label="Change Layout">
                <Button
                    onClick={() => {
                        dispatch(showPopover(null))
                        onOpen({ type: 'changeLayout' })
                    }}
                    className="rounded-none px-3 group flex items-center w-full "
                    variant="secondary"
                    type="button"
                >
                    <FiLayout className="w-5 h-5 group-hover:text-black transition text-emerald-500" />
                </Button>
            </ActionTooltip>

            {hasGrid && (
                <ActionTooltip side="top" align="center" label="Grid">
                    <Button
                        onClick={() => {
                            setValue(
                                `${name}.grid`,
                                section?.grid === 2 ? 1 : 2
                            )
                        }}
                        className="rounded-none pl-0 group flex items-center w-full "
                        variant="secondary"
                        type="button"
                    >
                        <CiGrid2V className="w-5 h-5 group-hover:text-black transition text-emerald-500" />
                    </Button>
                </ActionTooltip>
            )}

            <ActionTooltip side="top" align="center" label="Rearrenge">
                <Button
                    onClick={() => {
                        dispatch(showPopover(null))
                        onOpen({ type: 'openRearrenge' })
                    }}
                    className="rounded-none pl-0 rounded-r-[50px] group"
                    variant="secondary"
                    type="button"
                >
                    <ArrowUpDown className="w-5 h-5 group-hover:text-black transition text-emerald-500" />
                </Button>
            </ActionTooltip>
        </AItem>
    )
}

export default GropPopover
