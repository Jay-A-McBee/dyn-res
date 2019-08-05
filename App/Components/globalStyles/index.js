import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html{
        -webkit-font-smoothing: antialiased;
        margin:0; 
        padding:0;
    }


    body{
        font-family: 'Roboto', serif;
        color: ${props => props.theme.text};
        background-color: ${props => props.theme.bckg};
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
        text-decoration: none;
    }

`