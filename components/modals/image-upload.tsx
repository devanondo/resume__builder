'use client'

import { UploadDropzone } from '@/lib/uploadthing'
import { useModal } from '../hooks/use-modal-store'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { roboto } from '@/lib/font'
import { useFormContext } from 'react-hook-form'

const UploadImageModal = () => {
    const { isOpen, onClose, type } = useModal()
    const value = useFormContext()

    const isModalOpen = isOpen && type === 'uploadImage'

    const [url, setUrl] = useState<string>()

    const handleClose = () => {
        onClose()
    }

    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent
                className={cn(
                    'bg-white text-black p-0 overflow-hidden max-h-full ',
                    roboto.className
                )}
            >
                <DialogHeader className="pt-4 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Upload your Photo
                    </DialogTitle>
                </DialogHeader>

                <div className="p-2 w-full flex items-center justify-center">
                    {url ? (
                        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
                            <div className="relative w-fit">
                                <Image
                                    width={150}
                                    height={150}
                                    src={url}
                                    className="rounded object-cover border"
                                    alt="Server Image"
                                />

                                <button
                                    className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-md"
                                    type="button"
                                    onClick={() => setUrl('')}
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                            <Button
                                onClick={() => {
                                    const { setValue } = value
                                    setValue('header.photoUrl', url)
                                    // should be add server action to save url to the server
                                    handleClose()
                                    setUrl('')
                                }}
                                className=" mt-5 "
                                type="button"
                            >
                                Add to Resume
                            </Button>
                        </div>
                    ) : (
                        <UploadDropzone
                            endpoint="profileImage"
                            onClientUploadComplete={(res) => {
                                setUrl(res?.[0].url)
                            }}
                            className="w-full -mt-4 py-8"
                            appearance={{
                                uploadIcon: {
                                    width: '80px',
                                },
                                button: {
                                    fontSize: '16px',
                                    width: '100%',
                                    padding: '3px 15px',
                                    background: 'gray',
                                    marginBottom: '20px',
                                },
                                label: {
                                    color: '#384347',
                                    fontSize: '20px',
                                    fontWeight: '400',
                                },
                            }}
                        />
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default UploadImageModal
