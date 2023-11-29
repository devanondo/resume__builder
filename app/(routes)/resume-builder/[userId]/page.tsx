/* eslint-disable no-unused-vars */
import ResumePagewrapper from '@/components/resume-builder-editable-div/resume-page-wrapper'

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
