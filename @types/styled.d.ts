import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string

        colors: {
            primary: string
            gray100: string
            black: string
        }
    }
}
