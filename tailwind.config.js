const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#0081A7',
        primaryHover:"#016F8F",
        secondary:'#00AFB9',
        terinaty:'#FDFCDC',
        sandle:'#FED9B7',
        tomato:'#F07167',
        white:'#ffffff',
        black:'#000000',
      }
    },
  },
  plugins: [],
});

