// import ResumePage from '@/components/resume-builder/ResumePage'

import ResumePage from '@/components/resume-builder-editable-div/ResumePage'
import Navigation from '@/components/resume-builder-editable-div/navbar/navigation-bar'

export default function Home() {
    return (
        <>
            <Navigation />
            <div className="relative flex items-start justify-center py-16">
                <ResumePage />
            </div>
        </>
    )
}
