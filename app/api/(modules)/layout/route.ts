/* eslint-disable no-console */
import { connectToDB } from '@/app/lib/dbconfig'
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import { Layout } from './layout-model'

export async function GET() {
    try {
        connectToDB()

        const { userId } = auth()

        const layout = await Layout.findOne({ uid: userId })

        return NextResponse.json(layout)
    } catch (error) {
        console.log('[SERVERS_POST] Error', error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}

export async function PATCH(req: Request) {
    try {
        connectToDB()
        const { userId } = auth()
        const { key } = await req.json()
        const layout = await Layout.findOne({ uid: userId })
        const newLayout = layout.sections.map((layout: any) => {
            layout.column = key.find(
                (k: any) => k.title === layout.title
            ).column
            return layout
        })
        layout.sections = newLayout
        await layout.save()

        return NextResponse.json(layout)
    } catch (error) {
        console.log('[SERVERS_POST] Error', error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}

export async function PUT(req: Request) {
    try {
        connectToDB()
        const { userId } = auth()
        const { layoutKeys } = await req.json()

        const layout = await Layout.findOne({ uid: userId })
        layout.sections = layoutKeys
        await layout.save()

        return NextResponse.json(layout)
    } catch (error) {
        console.log('[SERVERS_POST] Error', error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}
