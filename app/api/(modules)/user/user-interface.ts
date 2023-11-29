import { Model } from 'mongoose'

export type IUser = {
    email: string
    name: string
    imageUrl?: string
    membership?: string
    uid: string
}

export type UserModel = Model<IUser, Record<string, unknown>>
