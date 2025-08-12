module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#A5A6F6",
          black: "#151515",
          gray: "#777C87",
        },
      },
      fontFamily: {
        'openSans': ['Open Sans, sans-serif'],
        'workSans': ['Work Sans, sans-serif']
      }
    },
  },
  plugins: [],
  darkMode: 'class'
};
