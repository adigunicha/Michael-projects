/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        'body':'#17171f',
        'selected-text':'#A3A3FF',
        'theme':'#3f3fff',
        'nav':'#404053',
        'secondary':'#9191A4',
        'badge':'#3F3F51',
        'input-border':'#565666',
        'input':'#2A2A35',
        },
        fontfamily:{
          'poppins':['poppins','sans-serif']
        },
        spacing: {
          '100': '100vh',
          '80':'40vh',
          '500':'400px',
          '370':'370px',
          '350':'350px'
          
        }

    },
  },
  plugins: [],
}

