import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html{
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
    }


    body{
        font-family: 'Roboto', courier;
        color: rgb(252, 219, 148);
        background-color: rgba(114, 98, 99, .99);
        background-size: 100% 100%;
        background-attachment: fixed;
    }

    body.noScroll{
        overflow: hidden;
    }

    a{
        margin-right: 15px;
        padding: 2px;
        color: rgb(103, 206, 178);
        text-decoration: none;
    }
`