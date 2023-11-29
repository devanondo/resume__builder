/* eslint-disable no-console */
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import { Resume } from './resume-model'
import { connectToDB } from '@/app/lib/dbconfig'

export async function GET() {
    try {
        await connectToDB()
        const { userId } = auth()

        const resume = await Resume.findOne(
            { uid: userId },
            { _id: 0, createdAt: 0, updatedAt: 0, __v: 0, id: 0, uid: 0 }
        )

        return NextResponse.json(resume)
    } catch (error) {
        console.log('[SERVERS_POST] Error', error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}

export async function PATCH(req: Request) {
    try {
        const { userId } = auth()

        const values = await req.json()

        await Resume.updateOne({ uid: userId }, values)

        return NextResponse.json('Saved')
    } catch (error) {
        console.log('[SERVERS_POST] Error', error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}
