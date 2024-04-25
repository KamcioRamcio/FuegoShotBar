export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend:{
    screens: {
      's-phone': {'max':'280px'},
      'm-phone': {'max':'320px'},
      'phone': {'max':'360px'},
      'l-phone': {'max':'400px'},
      'xl-phone': {'max':'460px'},
      'tablet': {'max':'600px'},
      '900' : {'max':'900px'},
      'l-tablet': {'max':'1000px'},
      'xl-tablet': {'max':'1200px'},
      's-pc': {'max':'1350px'},
    },
    colors:{
      'primary': '#FF6363',
    }
  }
    
    
  },
  plugins: [],
}