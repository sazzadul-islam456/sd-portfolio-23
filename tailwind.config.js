module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#b5b34a',
        grey: {
          DEFAULT: '#555555',
        },
      },
      fontFamily: {
        signature: ["Great Vibes"],
        primary: ["Oswald"],
      }
    },
  },
  plugins: [],
  corePlugins: {
    // Ensure base styles are enabled
    base: true,
  },
};
