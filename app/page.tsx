// import ResumePage from '@/components/resume-builder/ResumePage'

import NavigationSidebar from '@/components/navigation/navigation-sidebar'
import ResumePage from '@/components/resume-builder-editable-div/ResumePage'
import Navigation from '@/components/resume-builder-editable-div/navbar/navigation-bar'

export default function Home() {
    return (
        <>
            <div className="hidden md:!flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
                <NavigationSidebar />
            </div>

            <div className="md:pl-[72px] h-full">
                <Navigation />
                <div className="relative flex items-start justify-center py-16">
                    <ResumePage />
                </div>
            </div>
        </>
    )
}
