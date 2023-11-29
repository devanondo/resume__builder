import { auth } from '@clerk/nextjs'
import { User } from '../api/(modules)/user/user-model'

export const currentProfile = async () => {
    const { userId } = auth()
    if (!userId) return null
    const user = await User.findOne({ uid: userId })

    return user
}
