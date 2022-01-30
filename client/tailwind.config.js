module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'slate': '#1E293B',
        'light-slate': '#74828F',
        'purple': '#3F3CBB',
        'darkEuc':'#60634B',
        'light-blue':'#96C0CE'
      },
    },
  },
  plugins: [],
}
