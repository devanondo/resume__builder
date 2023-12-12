'use client'

import { roboto } from '@/lib/font'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { UserNav } from './user-nav'

import { Button } from '@/components/ui/button'
import { useAppSelector } from '@/redux/hooks'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { FaExclamationCircle } from 'react-icons/fa'
import { IoDocumentText } from 'react-icons/io5'
import TextBox from '../components/Editable'

export default function Navigation() {
    const [isMuted, setIsMuted] = useState(false)

    const { loading } = useAppSelector((state) => state.resume)
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
                        <Link href="/" className="no-underline">
                            <div className="relative z-20 flex items-center text-lg font-bold ">
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
                                AMRCV
                            </div>
                        </Link>

                        <div className="pl-3 flex items-center gap-x-2 text-sm">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-100">
                                <FaExclamationCircle className="text-red-500 w-5 h-5" />
                            </div>
                            This app is not convenient for small device!
                        </div>

                        <div className="flex items-center pl-4 ">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-200">
                                <IoDocumentText className="text-zinc-500 w-5 h-5" />
                            </div>
                            <div className="w-fit">
                                <TextBox
                                    name="title"
                                    className="w-full"
                                    placeholder="Title of your resume"
                                />
                            </div>
                        </div>

                        <div className="ml-auto flex items-center space-x-4">
                            <Button
                                variant="secondary"
                                size="sm"
                                disabled={loading ? true : false}
                            >
                                {loading && (
                                    <Loader2 className="h-4 w-4 mr-2 text-zinc-500 animate-spin my-4" />
                                )}
                                {loading ? 'Saving...' : 'Saved'}
                            </Button>

                            <UserNav />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
