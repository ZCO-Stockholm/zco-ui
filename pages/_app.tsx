import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: agm;
    src: url('/fonts/agm.woff') format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: agl;
    src: url('/fonts/agl.woff') format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: agr;
    src: url('/fonts/agr.woff') format('woff');
    font-display: swap;
  }

  html {
    box-sizing: border-box;
    font-size: 14px;
    line-height: 24px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.bgBody};
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const theme = {
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
    accent: '1px solid #3378f6',
    light: '1px solid #eee',
    regular: '1px solid #ddd',
    dark: '1px solid #ccc',
  },
  borderRadius: '5px',
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}