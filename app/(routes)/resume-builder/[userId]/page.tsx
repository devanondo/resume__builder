/* eslint-disable no-unused-vars */
// import ResumePagewrapper from '@/components/resume-builder-editable-div/resume-page-wrapper'
import dynamic from 'next/dynamic'

const ResumePagewrapper = dynamic(
    () => import('@/components/resume-builder-editable-div/resume-page-wrapper')
    // { ssr: false }
)

interface BuilderProps {
    params: {
        userId: string
    }
}

export default async function Builder({ params }: BuilderProps) {
    return (
        <div>
            <ResumePagewrapper />
        </div>
    )
}
