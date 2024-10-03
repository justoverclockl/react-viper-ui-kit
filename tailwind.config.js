/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './lib/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    prefix: 'rv-',
    theme: {
        extend: {
            colors: {
                primary: '#94e179',
                secondary: '#1aa73f',
                light: '#58ae6f',
                outline: 'transparent',
                danger: '#c30e5d',
                tprimary: '#13792e',
                tsecondary: '#dff1e3',
                tlight: '#35a431',
                cardBorder: '#e5e5e5',
            },
        },
    },
    plugins: [
    ],
};
