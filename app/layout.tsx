import React, { Suspense } from 'react'

import { ModalProvider } from '@/components/provider/ModalProvider'
import { Toaster } from 'sonner'
import ReduxProvider from '@/redux/redux-provider'
import type { Metadata } from 'next'
import './globals.css'
import './main.scss'

import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
    title: 'Resume Builder',
    description: 'Generated by next app',
}

import { Bitter, Lato, Roboto } from 'next/font/google'
import Loading from './loading'

export const roboto = Roboto({
    weight: ['300', '400', '500', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-roboto',
})
export const bitter = Bitter({
    weight: ['300', '400', '500', '600', '700', '800'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-bitter',
})

export const lato = Lato({
    weight: ['100', '300', '400', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-lato',
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={` ${roboto.className}  `}>
                    <ReduxProvider>
                        <Suspense fallback={<Loading />}>
                            <div className="h-full">{children}</div>
                            <ModalProvider />
                        </Suspense>
                    </ReduxProvider>

                    <Toaster position="top-center" />
                </body>
            </html>
        </ClerkProvider>
    )
}
