/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg0: 'var(--bg0)',
                bg1: 'var(--bg1)',
                surface0: 'var(--surface0)',
                surface1: 'var(--surface1)',
                surface2: 'var(--surface2)',
                line: 'var(--line)',
                line2: 'var(--line2)',
                text0: 'var(--text0)',
                text1: 'var(--text1)',
                text2: 'var(--text2)',
                accent: 'var(--accent)',
                accent2: 'var(--accent2)',
                good: 'var(--good)',
                warn: 'var(--warn)',
                bad: 'var(--bad)',
            },
            boxShadow: {
                DEFAULT: 'var(--shadow)',
                '2': 'var(--shadow2)',
            },
            borderRadius: {
                lg: 'var(--radius-lg)',
                md: 'var(--radius-md)',
                sm: 'var(--radius-sm)',
            },
            maxWidth: {
                'site': 'var(--maxw)',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
                'reveal': 'reveal 0.6s ease forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                reveal: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            },
        },
    },
    plugins: [],
}
