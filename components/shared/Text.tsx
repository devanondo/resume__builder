'use client'

import { cn } from '@/lib/utils'
import TextareaAutosize from 'react-textarea-autosize'

interface TextareaAutosizeProps {
    className?: string
    placeholder?: string
    style?: any
}

const Text = ({ className, placeholder, ...props }: TextareaAutosizeProps) => {
    return (
        <TextareaAutosize
            className={cn(
                'w-full py-1 px-2 focus:bg-white resize-none outline-none bg-transparent -mt-1',
                className
            )}
            placeholder={placeholder}
            {...props}
        />
    )
}

export default Text
