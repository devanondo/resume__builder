import { NextResponse } from 'next/server'
import { connectToDB } from '@/app/lib/dbconfig'

export async function GET(req: Request) {
    try {
        connectToDB()
        // const profile = await currentProfile();
        const body = await req.json()
        console.log(body)

        return NextResponse.json('working')
    } catch (error) {
        console.log('[SERVERS_POST] Error', error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}
