// import ResumePage from '@/components/resume-builder/ResumePage'

import { redirect } from 'next/navigation'
import { connectToDB } from './lib/dbconfig'
import { initialUser } from './lib/initial-user'

export default async function Home() {
    await connectToDB()

    const userInfo = await initialUser()

    if (userInfo) {
        return redirect(`/resume-builder/${userInfo?.uid}`)
    }

    return (
        <div>{/* <ResumePagewrapper resume={userInfo?.resumeData} /> */}</div>
    )
}
