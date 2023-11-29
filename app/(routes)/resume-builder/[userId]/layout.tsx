import React, { Suspense } from 'react'

import type { Metadata } from 'next'
import Loading from './loading'

export const metadata: Metadata = {
    title: 'Resume Builder',
    description: 'Build Next level Resume',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <Suspense fallback={<Loading />}>{children}</Suspense>
}
