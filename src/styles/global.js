import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap');
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Lexend', sans-serif;
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    img{
        max-width: 100%;
    }
`;
