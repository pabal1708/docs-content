/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

    theme: {
      fontFamily: {
        code: ['"Fira Code"'],
        form: ['Poppins']
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        md: '18px',
        xl: '30px',
        '2xl': '24px',
        '2xl-extra': '28px',
        '3xl': '32px',
        '4xl': '40px',
        '5xl': '48px',
        '6xl': '56px',
        '7xl': '64px',
        't-h1': '36px'
      },
      colors: {
        'primary-900': '#7D0329',
        'primary-800': '#980936',
        'primary-700': '#B91649',
        'primary-600': '#CE1A55',
        'primary-500': '#E61E66',
        'primary-400': '#E8357C',
        'primary-300': '#E94587',
        'primary-200': '#ED71A7',
        'primary-100': '#F98ABA',
        'monochrome-900': '#212529',
        'monochrome-800': '#343A40',
        'monochrome-700': '#495057',
        'monochrome-600': '#6C757D',
        'monochrome-500': '#ADB5BD',
        'monochrome-400': '#CED4DA',
        'monochrome-300': '#DEE2E6',
        'monochrome-200': '#E9ECEF',
        'monochrome-100': '#F8F9FA',
        'secondary-900': '#116467',
        'secondary-800': '#198B8F',
        'secondary-700': '#1A9CA1',
        'secondary-600': '#21B5B8',
        'secondary-500': '#20B4B8',
        'secondary-400': '#8BD8D8',
        'secondary-300': '#B8EFEF',
        'secondary-200': '#E2FAFA',
        'secondary-100': '#ECFFFF',
        'dark-700': '#171717',
        backdrop: 'rgba(0, 0, 0, 0.2)',
        success: '#60CC60',
        'success-bright': '#389E0D',
        warning: '#DEB466',
        'warning-10': '#E9E5DD',
        'warning-bright': '#C0C045',
        'warning-bright-secondary': '#D48806',
        error: '#D86060',
        'error-10': '#EADFE3',
        'error-bright': '#F5222D',
        info: '#6073D8',
        'info-10': '#DDDFE9',
        'info-bright': '#1890FF',
        black: '#000000',
        white: '#FFFFFF',
        dark: '#2F2F2F',
        'dark-20': '#4E4D4D',
        'dark-600': '#212121',
        'dark-700': '#171717',
        'grey-light': '#D8DDE1',
        'grey-dark': '#454545',
        'grey-code': '#7B7B7B'
      },
      letterSpacing: {
        1: '0em',
        2: '0.025em',
        3: '0.05em',
        4: '0.4em'
      },
      extend: {
        fontFamily: {
          sans: ['TT Norms Pro']
        },
        height: {
          15: '3.75rem',
          54: '13.5rem'
        },
        width: {
          51: '204px',
          53: '212px',
          54: '216px',
          69: '276px',
          73: '292px',
          204: '816px'
        },
        lineHeight: {
          herom: '2.875rem',
          12: '3rem',
          product: '3.375rem',
          13: '3.875rem',
          14: '4rem',
          hero: '4.375rem'
        },
        padding: {
          16.5: '66px',
          18: '72px',
          22: '88px',
          24: '96px',
          25.5: '102px',
          30: '120px',
          34: '4.5rem',
          50: '12.5rem',
          69: '276px',
          75: '300px',
          section: '8.125rem'
        },
        margin: {
          10: '40px',
          16.5: '66px',
          18: '72px',
          26: '104px',
          30: '120px',
          50: '200px',
          69: '276px'
        },
        maxWidth: {
          44: '176px',
          70: '280px',
          75: '300px',
          105: '420px',
          127: '508px',
          141: '564px',
          144: '576px',
          204: '816px',
          267: '1068px',
          300: '1200px',
          section: '1440px'
        },
        minWidth: {
          51: '204px',
          69: '276px',
          70: '280px',
          73: '292px',
          120: '480px',
          175: '700px'
        },
        maxHeight: {
          222.25: '901px'
        },
        minHeight: {
          222.25: '901px',
          100: '400px'
        },
        letterSpacing: {
          label: '0.2em',
          wide: '0.25em',
          wider: '0.5em'
        },
        inset: {
          25.5: '102px'
        }
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  plugins: [],
}
