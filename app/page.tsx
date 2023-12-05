import { Button } from '@/components/ui/button'
import { UserButton, auth } from '@clerk/nextjs'
import { LogIn } from 'lucide-react'
import Link from 'next/link'

export default async function Home() {
    const { userId } = await auth()
    const isAuth = !!userId

    return (
        <div className="bg-gradient-to-r from-fuchsia-50 to-teal-100 w-full h-screen">
            <div className="h-screen flex items-center justify-center max-w-2xl mx-auto ">
                <div className="flex flex-col items-center justify-center gap-y-2">
                    <div className="text-3xl  font-bold text-center">
                        Welcome to the
                        <div className="text-4xl bg-gradient-to-r from-sky-400 to-green-300 bg-clip-text text-transparent">
                            AMRCV.in
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <div className="text-5xl font-semibold bg-gradient-to-r from-violet-500 to-teal-300 bg-clip-text text-transparent">
                            Build as a Professional!
                        </div>
                        <UserButton afterSignOutUrl="/" />
                    </div>

                    <div className="text-center  mt-1">
                        Join Thousands of student and professionals to inreduce
                        yourself with AMRCV.
                    </div>
                    {isAuth ? (
                        <Link href={`/resume-builder/${userId}`}>
                            <Button className="font-semibold">
                                Go to Resume Builder
                            </Button>
                        </Link>
                    ) : (
                        <Link href="/sign-in">
                            <Button>
                                Login to get Started!
                                <LogIn className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}
