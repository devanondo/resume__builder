'use client'

import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'

export function UserNav() {
    return (
        <Button
            variant="ghost"
            className="relative h-8 w-8 rounded-full border"
        >
            <UserButton afterSignOutUrl="/" />
        </Button>
    )
}
