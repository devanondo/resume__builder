'use client'

import { Loader2 } from 'lucide-react'

export default function Loading() {
    return (
        <div className="flex flex-col flex-1 justify-center items-center w-full h-screen bg-gray-100">
            <Loader2 className="h-7 w-7 text-zinc-500 animate-spin my-4" />

            <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Preparing Content...
            </p>
        </div>
    )
}
