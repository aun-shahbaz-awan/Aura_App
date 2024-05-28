/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        back: "#F8F8F8",
        primary: "#0B0D18",
        secondary: "#B6B7BA",
      },

      fontFamily: {
        "poppins-black": "Poppins-Black",
        "poppins-black-italic": "Poppins-BlackItalic",
        "poppins-extra-bold": "Poppins-ExtraBold",
        "poppins-extra-bold-italic": "Poppins-ExtraBoldItalic",
        "poppins-bold": "Poppins-Bold",
        "poppins-bold-italic": "Poppins-BoldItalic",
        "poppins-semi-bold": "Poppins-SemiBold",
        "poppins-semi-bold-italic": "Poppins-SemiBoldItalic",
        "poppins-medium": "Poppins-Medium",
        "poppins-medium-italic": "Poppins-MediumItalic",
        "poppins-regular": "Poppins-Regular",
        "poppins-italic": "Poppins-Italic",
        "poppins-light": "Poppins-Light",
        "poppins-light-italic": "Poppins-LightItalic",
        "poppins-thin": "Poppins-Thin",
        "poppins-thin-italic": "Poppins-ThinItalic",
      },
    },
  },
  plugins: [],
};
