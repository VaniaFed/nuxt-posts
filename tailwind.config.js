module.exports = {
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "pastel"],
    base: true,
    styled: true,
    utils: true
  },
}