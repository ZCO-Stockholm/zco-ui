import media from './media'

const theme = {
  padding: `
    padding: 50px;
    ${media.small} {
      padding: 20px;
    }
  `,
  fonts: {
    regular: 'agr, sans-serif',
    medium: 'agm, sans-serif',
    light: 'agl, sans-serif',
  },
  colors: {
    accent: '#3378F6',
    accentDark: '#1F62E0',
    primary: '#333',
    secondary: '#888',
    bgBody: '#FCFCFC',
    bg: '#fff',
    error: '#F66233',
    success: '#098E6E',
  },
  borders: {
    error: '1px solid #FBB099',
    success: '1px solid #84C7B7',
    accent: '1px solid #3378f6',
    light: '1px solid #eee',
    regular: '1px solid #ddd',
    dark: '1px solid #ccc',
  },
  borderRadius: '5px',
  boxShadow: {
    primary: '0px 0px 10px rgb(0 0 0 / 10%)',
    dark: '0px 0px 10px rgb(0 0 0 / 20%)',
  }
}

export default theme