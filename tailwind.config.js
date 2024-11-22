/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        yellow: {
          main: "#EDB310",
        },
      },

      fontFamily: {
        "Poppins-Black": "Poppins-Black",
        "Poppins-Bold": "Poppins-Bold",
        "Poppins-ExtraBold": "Poppins-ExtraBold",
        "Poppins-Medium": "Poppins-Medium",
        "Poppins-Regular": "Poppins-Regular",
        "Poppins-SemiBold": "Poppins-SemiBold",
        "Lobster-Regular": "Lobster-Regular",
      },
    },
  },
  plugins: [],
};
