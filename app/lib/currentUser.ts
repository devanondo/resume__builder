import { auth } from '@clerk/nextjs'
import { User } from '../api/(modules)/user/user-model'
import { Resume } from '../api/(modules)/resume/resume-model'

export const currentProfile = async () => {
    const { userId } = auth()

    if (!userId) return null

    const profile = await User.findOne({ uid: userId })

    return profile
}

export const currentResume = async () => {
    const { userId } = auth()

    if (!userId) return null

    const resumeData = await Resume.findOne({ uid: userId })

    return resumeData
}
