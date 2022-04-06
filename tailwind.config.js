module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        'black-rgba' : 'rgba(0, 0, 0, 0.75)',
        'merah' : '#610606',
        'emas' : '#A28A4A',
        'putih' : '#DED6C5',
      },
      fontFamily: {
        'sambung': 'Golden',
        'kapital-bold' : 'Adam-Bold',
        'kapital-medium': 'Adam-Medium',
        'kapital-light': 'Adam-Light',
        'tanda-huruf' : 'AnthoniGristhea',
      },
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}
