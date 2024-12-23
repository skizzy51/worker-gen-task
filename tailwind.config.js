/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            ...colors,
        },
        screens: {
            sm: "425px",
            md: "769px",
            lg: "1024px",
            mxl: "1150px",
            xl: "1286px",
            "2xl": "1536px",
        },
    },
    plugins: [],
}
