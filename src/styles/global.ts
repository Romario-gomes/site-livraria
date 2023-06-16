import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background-900: #121214;
    --background-800: #202024;
    --background-700: #323238;
    --yellow-600: #e8ab00;
    --text-body: #B7BDC4;
  }

  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
  
  body{
    background-color: var(--background-800);
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
`
