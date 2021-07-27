import { createGlobalStyle } from "styled-components"

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

export default GlobalStyle