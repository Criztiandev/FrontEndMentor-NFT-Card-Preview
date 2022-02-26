module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        primary:{
          blue : "hsl(215, 51%, 70%)",
          cyan : "hsl(178, 100%, 50%)",
          "cyan-50" : "#00fff780"
        },

        neutral:{
          main : "hsl(217, 54%, 11%)",
          card : "hsl(216, 50%, 16%)",
          line : "hsl(215, 32%, 27%)"
        }
      },



      maxWidth: {
        '1/4': '25%',
        '350px': "350px",
        '3/4': '75%',
      },

      width: {
        '300px': '300px',
      },
      height:{
        '300px': '300px',
        
      }
    },
  },

  variant:{
    extend:{
     
    }
  },
  plugins: [],
}
