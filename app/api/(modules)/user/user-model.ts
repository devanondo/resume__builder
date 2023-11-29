import mongoose, { Schema, model } from 'mongoose'
import { IUser, UserModel } from './user-interface'

const UserSchema = new Schema<IUser, UserModel>(
    {
        uid: {
            type: String,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        membership: {
            type: String,
            default: 'regular',
        },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
)

export const User =
    mongoose.models['user'] || model<IUser, UserModel>('user', UserSchema)
