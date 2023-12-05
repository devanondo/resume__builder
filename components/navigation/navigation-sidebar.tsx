'use client'

import {
    Download,
    Layout,
    LayoutDashboard,
    Palette,
    Plus,
    Share,
} from 'lucide-react'
import { IModalType, useModal } from '../hooks/use-modal-store'
import ActionTooltip from '../shared/action-tooltip'
import { Separator } from '../ui/separator'

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

const NavigationSidebar = ({ onSave }: { onSave: () => void }) => {
    const { onOpen } = useModal()

    return (
        <div
            className="h-full text-primary w-full  flex flex-col items-center rounded overflow-hidden bg-white"
            style={{
                boxShadow: 'rgba(100, 100, 111, 0.4) 0px 7px 29px 0px',
            }}
        >
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

            <Separator />

            <ActionTooltip side="right" align="center" label={'Download'}>
                <button
                    className="group flex items-center w-full"
                    onClick={(e) => {
                        e.preventDefault()
                        onSave()
                    }}
                >
                    <div className="flex  w-full cursor-pointer p-2 transition-all overflow-hidden items-center gap-x-2  group-hover:bg-emerald-500 group-hover:text-white">
                        <Download
                            className="group-hover:text-white transition text-emerald-500"
                            size={20}
                        />
                        <span className="hidden xl:block">Download</span>
                    </div>
                </button>
            </ActionTooltip>
            <ActionTooltip side="right" align="center" label={'Share'}>
                <button className="group flex items-center w-full">
                    <div className="flex  w-full cursor-pointer p-2 transition-all overflow-hidden items-center gap-x-2  group-hover:bg-emerald-500 group-hover:text-white">
                        <Share
                            className="group-hover:text-white transition text-emerald-500"
                            size={20}
                        />
                        <span className="hidden xl:block">Share</span>
                    </div>
                </button>
            </ActionTooltip>
        </div>
    )
}

export default NavigationSidebar
