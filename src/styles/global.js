import { createGlobalStyle } from "styled-components"
import theme from './theme'

export const globals = `
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'agr', serif;
    background-color: ${theme.colors.bgBody};
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.regular};
  }

  a {
    color: inherit;
  }
`

export const GlobalStyle = createGlobalStyle`
  ${globals}
`