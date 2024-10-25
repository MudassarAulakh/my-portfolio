/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 3s linear infinite',
              },
              transitionDelay: {
                '1000': '1s',
                '2000': '2s',
                '3000': '3s',
              },
        },
       
    },
    plugins: [],
};