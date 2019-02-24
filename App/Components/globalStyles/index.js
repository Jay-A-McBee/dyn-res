import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html{
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        margin:0; 
        padding:0;
    }


    body{
        font-family: 'Roboto', courier;
        color: rgb(252, 219, 148);
        background-color: rgba(114, 98, 99, .99);
        margin:0; 
        padding:0;
        background-size: 100% 100%;
        background-attachment: fixed;
    }

    body.noScroll{
        overflow: hidden;
    }

    p{
        margin: 0 0 16px;
    }

    a{
        padding: 2px;
        color: rgb(103, 206, 178);
        text-decoration: none;
    }

`