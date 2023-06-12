module.exports = {
  theme: {
    extend: {
      borderWidth: {
        1: '1px'
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
      spacing: {
        '2px': '2px',
        '4px': '4px',
        '8px': '8px',
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '20px': '20px',
        '24px': '24px',
        '32px': '32px',
        '36px': '36px',
        '40px': '40px',
        '48px': '48px',
        '56px': '56px',
        '64px': '64px',
        '80px': '80px',
        '100px': '100px',
        '106px': '106px',
        '120px': '120px',
        '200px': '200px',
        '320px': '320px',
        '600px': '600px',
        '1280px': '1280px'
      },
      fontFamily: {
        sans: ['TT Norms Pro', 'sans-serif'],
        code: ['Fira Code']
      },
      fontSize: {
        10: '10px',
        12: '12px',
        24: '24px',
        40: '40px',
        60: '60px'
      },
      lineHeight: {
        '14px': '14px'
      },
      boxShadow: {
        'depth-1': '0px 4px 6px rgba(0, 0, 0, 0.2), 0px 0px 1px rgba(0, 0, 0, 0.32)',
        'depth-2': '0px 2px 2px rgba(0, 0, 0, 0.06)',
        card: '0px 8px 24px 8px rgba(0, 0, 0, 0.1)',
        top: '0px 4px 24px rgba(0,0,0,0.1)',
      },
      zIndex: {
        '5k': 5000
      },
      maxWidth: {
        '90px': '90px',
        '256px': '256px',
        '344px': '344px',
        '518px': '518px',
        '668px': '668px',
        '816px': '816px',
        '1228px': '1228px'
      },
      maxHeight: {
        '124px': '124px',
        '148px': '148px',
        '266px': '266px'
      },
      minWidth: {
        '280px': '280px',
        '600px': '600px',
        '668px': '668px',
        '1228px': '1228px'
      },
      width: {
        '156px': '156px',
        '216px': '216px',
        '246px': '246px',
        '1228px': '1228px'
      },
      height: {
        '18px': '18px',
        '34px': '34px',
        '52px': '52px',
        '66px': '66px',
        '102px': '102px'
      },
      margin: {
        '22px': '22px'
      },
      opacity: {
        10: '.10'
      },
      letterSpacing: {
        4: '4px'
      }
    }
  },
  variants: {
    extend: {
      padding: ['first', 'last'],
      margin: ['first', 'last'],
      backgroundColor: ['checked'],
      borderColor: ['checked', 'active'],
      borderWidth: ['first', 'last'],
      borderRadius: ['first', 'last'],
      fontWeight: ['hover'],
      translate: ['hover'],
      transitionProperty: ['hover'],
      textColor: ['active']
    }
  }
};
