import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'

const theme: DefaultTheme = {
  colors: {
    background: 'rgba(60, 60, 75, .9)',
    primary: 'rgba(54, 58, 64, .5)',
    secondary: 'rgba(54, 58, 64, .5)',
  },
  spacing: {
    xs: '2px',
    s: '4px',
    m: '6px',
    l: '8px',
    xl: '16px',
    xxl: '32px',
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
