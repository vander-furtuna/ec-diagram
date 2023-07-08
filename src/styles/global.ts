import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    -webkit-tap-highlight-color: transparent;

  }

  body {
    width: 100%;
    height: 100vh;
  }

  input, button, textarea {
    font-family: 'Poppins', sans-serif;
    background-color: transparent;
  }
`;
