/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#6200EA",
                heading: "#555555",
            }
        },
    },
    plugins: [],
}