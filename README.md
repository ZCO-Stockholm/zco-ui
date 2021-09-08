# ZCO UI

React component library for admin interfaces. Work in progress.

## Usage

The library uses Styled Components, which means you need to set up a theme and global styles.

### Setup

Import and extend the default library theme:

```js
import { theme } from 'zco-ui'

const myTheme = {
  ...theme
  // Custom theme properties can be added here
}

```

Import and extend the default global styles:

```js
import { createGlobalStyle } from 'zco-ui'

const GlobalStyle = createGlobalStyle(`
  // Custom global CSS can be added here
`)
```

Then add theme and global styles to your app tree. Refer to the Styled Components documentation. Example using Next.js:

```ts
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
```

### Fonts

The global style expects the Atlas Grotesk fonts to be available as:

`/fonts/agl.ttf|woff|eot`

`/fonts/agm.ttf|woff|eot`

`/fonts/agr.ttf|woff|eot`

Other fonts can be used by using custom global style and theme.