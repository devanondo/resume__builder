'use client'

import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import ContentEditable from './EditDiv'

interface TextBoxProps extends HTMLAttributes<HTMLDivElement> {
    name: string
    className?: string
    link?: boolean
    href?: string
    ref?: any
    isChange?: boolean
}

const TextBox = ({
    name,
    className,
    link,
    href,
    ref,
    isChange,
    ...props
}: TextBoxProps) => {
    const { control } = useFormContext()

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                return (
                    <>
                        {!link ? (
                            <ContentEditable
                                html={field.value} // innerHTML of the editable div
                                disabled={false} // use true to disable edition
                                onChange={field.onChange} // handle innerHTML change
                                className={cn(
                                    className,
                                    'cursor-auto px-2 editable__div__st'
                                )}
                                isChange={isChange}
                                ref={ref}
                                {...props}
                            />
                        ) : (
                            <a
                                onClick={(e) => e.preventDefault()}
                                href={
                                    href
                                        ? `mailto:${field.value}`
                                        : `https://${field.value}`
                                }
                                target="_blank"
                                style={{
                                    textDecoration: 'none',
                                    cursor: 'auto',
                                }}
                            >
                                <ContentEditable
                                    html={field.value} // innerHTML of the editable div
                                    disabled={false} // use true to disable edition
                                    onChange={field.onChange} // handle innerHTML change
                                    className={cn(
                                        className,
                                        'cursor-auto px-2 editable__div__st '
                                    )}
                                    {...props}
                                />
                            </a>
                        )}
                    </>
                )
            }}
        />
    )
}

export default TextBox
