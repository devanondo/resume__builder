import type { Config } from 'tailwindcss'

import { withUt } from 'uploadthing/tw'

const config: Config = withUt({
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                roboto: ['var(--font-roboto)'],
                bitter: ['var(--font-bitter)'],
            },
        },
    },
    plugins: [],
})
export default config
