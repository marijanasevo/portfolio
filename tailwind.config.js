/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grayish: "#364151",
        pink: "#976c92",
        'light-warm': "#f4f1f1",
        "dim-purple": "#8e899c"
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "Times", "serif"],
      },
      fontSize: {
        15: "15px",
      },
      maxWidth: {
        "50ch": "50ch",
      },
      screens: {
        'mdh': {'raw': '(min-height: 600px) and (min-width: 768px)'}
      }
    },
  },
  plugins: [],
};
