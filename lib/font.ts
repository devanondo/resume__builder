import { Bitter, Lato, Roboto } from 'next/font/google'

export const roboto = Roboto({
    weight: ['300', '400', '500', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-roboto',
})
export const bitter = Bitter({
    weight: ['300', '400', '500', '600', '700', '800'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-bitter',
})

export const lato = Lato({
    weight: ['100', '300', '400', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-lato',
})
