'use client'

import { roboto } from '@/lib/font'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { UserNav } from './user-nav'

export default function Navigation() {
    const [isMuted, setIsMuted] = useState(false)

    useEffect(() => {
        setIsMuted(true)
    }, [])

    if (!isMuted) return null

    return (
        <div className={cn(roboto.className, 'fixed top-0 left-0 w-full z-10')}>
            <div
                className="hidden flex-col bg-white md:flex "
                style={{
                    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 7px 20px 0',
                }}
            >
                <div className="border-b  z-50">
                    <div className="flex container h-16 items-center px-4">
                        <div className="relative z-20 flex items-center text-lg font-medium">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 h-6 w-6"
                            >
                                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                            </svg>
                            AMRCV.in
                        </div>

                        <div className="ml-auto flex items-center space-x-4">
                            <UserNav />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
