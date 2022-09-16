import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      primary: string
      secondary: string
    }
    spacing: {
      xs: string
      s: string
      m: string
      l: string
      xl: string
      xxl: string
    }
  }
}