/* eslint-disable no-console */
import { NextResponse } from 'next/server'
import { User } from './user-model'
import { connectToDB } from '@/app/lib/dbconfig'

export async function POST(req: Request) {
    try {
        connectToDB()
        const { name, email } = await req.json()
        const isUserExist = await User.findOne({ email })
        if (isUserExist) {
            return new NextResponse('User already exist!', { status: 500 })
        }
        const newUser = await User.create({ name, email })
        return NextResponse.json(newUser)
    } catch (error) {
        console.log('[SERVERS_POST] Error', error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}
