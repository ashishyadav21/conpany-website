import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },

    extend: {
      translate: {
        '-4px': '-4px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'home-background': "url('/images/home-background.jpg')",
        'event':"url('/images/event.jpg')",
        'technology-image': "url(/images/technologybaner2.jpg)"

      },
      scrollSnapType: {
        y: 'y mandatory',
      },
      colors: {
      'backGroundColor':'#202127',
      'baseTextHighEmphasis':'#f4f4f6',
      'baseTextMedEmphasis':'#969faf',
      'redText':'#fd4b4ee6',
      'greenText':'#00c278e6',
      'greenBackgroundTransparent':'#00c27814',
      'greenBorder':'#00c27866',
      'accentBlue':'#4c94ff',
      'baseBorderMed':'#ffffff26',
      'baseBorderLight':'#202127',
      'redBorder':'#ea383b80',
      'buttonPrimaryBackground':'#ffffff',
      'buttonPrimaryText':'#14151b',
      'redBackgroundTransparent':'#ea383b1f',
      'greenPrimaryButtonBackground':'#00c27814',
      'greenPrimaryButtonText':'#00c278e6',
      'primary': '#fefefe',
      'white': '#fefefe',
      'skyBlue': '#e1f8ff',
      'primaryButton': '#002970',
      'grayBackground': '#f6f8fc',
      'black': '#000000',
      'primarySkyColor': '#00b9f5',
      'grayTextColor': '#444444',
      'placeholderColor': '#182233',
      'green': '#22c55e',
      'sky': {
        950: '#082f49',
        900: '#0c4a6e'
      },
    }
    },
  },
  plugins: [],
};
export default config;
