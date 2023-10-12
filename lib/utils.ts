import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function popkey(name: string, index: number) {
    const brokenName = name.split('.')
    brokenName[brokenName.length - 2] = `${index}`
    const finalkey = brokenName.join('.') + index

    return finalkey
}
