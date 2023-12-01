'use client'

import { Layout, LayoutDashboard, Palette, Plus } from 'lucide-react'
import { IModalType, useModal } from '../hooks/use-modal-store'
import ActionTooltip from '../shared/action-tooltip'

interface IAction {
    title: string
    icon: string
    action: IModalType
}

const icons: any = {
    layout: (
        <Layout
            className="group-hover:text-white transition text-emerald-500"
            size={20}
        />
    ),
    plus: (
        <Plus
            className="group-hover:text-white transition text-emerald-500"
            size={20}
        />
    ),
    grid: (
        <LayoutDashboard
            className="group-hover:text-white transition text-emerald-500"
            size={20}
        />
    ),
    palette: (
        <Palette
            className="group-hover:text-white transition text-emerald-500"
            size={20}
        />
    ),
}

const actions: IAction[] = [
    {
        title: 'Add Section',
        icon: 'plus',
        action: 'resumeAddSection',
    },
    {
        title: 'Change Layout',
        icon: 'layout',
        action: 'changeLayout',
    },
    {
        title: 'Rearrange',
        icon: 'grid',
        action: 'openRearrenge',
    },
    {
        title: 'Design',
        icon: 'palette',
        action: 'stylesDrawer',
    },
]

const NavigationSidebar = () => {
    const { onOpen } = useModal()

    return (
        <div className="h-full text-primary w-full bg-[#E3E5E8]  flex flex-col items-center rounded overflow-hidden">
            {actions?.map((action) => (
                <ActionTooltip
                    key={action.title}
                    side="right"
                    align="center"
                    label={action.title}
                >
                    <button
                        className="group flex items-center w-full"
                        onClick={(e) => {
                            e.preventDefault()
                            onOpen({ type: action.action })
                        }}
                    >
                        <div className="flex  w-full cursor-pointer p-2 transition-all overflow-hidden items-center gap-x-2  group-hover:bg-emerald-500 group-hover:text-white">
                            {icons[action.icon]}{' '}
                            <span className="hidden xl:block">
                                {action.title}
                            </span>
                        </div>
                    </button>
                </ActionTooltip>
            ))}
        </div>
    )
}

export default NavigationSidebar
