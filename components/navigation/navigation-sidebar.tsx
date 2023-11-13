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
            size={25}
        />
    ),
    plus: (
        <Plus
            className="group-hover:text-white transition text-emerald-500"
            size={25}
        />
    ),
    grid: (
        <LayoutDashboard
            className="group-hover:text-white transition text-emerald-500"
            size={25}
        />
    ),
    palette: (
        <Palette
            className="group-hover:text-white transition text-emerald-500"
            size={25}
        />
    ),
}

const actions: IAction[] = [
    {
        title: 'Add Section',
        icon: 'plus',
        action: 'changeLayout',
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
        title: 'Change Styles',
        icon: 'palette',
        action: 'stylesDrawer',
    },
]

const NavigationSidebar = () => {
    const { onOpen } = useModal()

    return (
        <div className="h-full text-primary w-full bg-[#E3E5E8] py-3 flex flex-col items-center gap-y-4">
            {actions?.map((action) => (
                <ActionTooltip
                    key={action.title}
                    side="right"
                    align="center"
                    label={action.title}
                >
                    <button
                        className="group flex items-center"
                        onClick={() => {
                            onOpen({ type: action.action })
                        }}
                    >
                        <div className="flex mx-3 h-[40px] cursor-pointer w-[40px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
                            {icons[action.icon]}
                        </div>
                    </button>
                </ActionTooltip>
            ))}
        </div>
    )
}

export default NavigationSidebar
