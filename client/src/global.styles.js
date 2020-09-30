import {createGlobalStyles} from 'styled-components'; 

export const GlobalStyle = createGlobalStyles`
body {
    font-family: 'Open Sans Condensed';
    padding: 20px 60px; 
    @media screen and (max-width: 800px) {
        padding: 10px; 
    }
}

a {
    text-decoration: none;
    color: black; 
}

* {
    box-sizing: border-box; 
}

`;