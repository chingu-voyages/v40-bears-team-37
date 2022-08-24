import { createGlobalStyle } from "styled-components";
import { fontSize } from "./Sizes";

const GlobalStyles = createGlobalStyle`
  * {
    :root {
      --background-color: #C8CFD9;
      --primary-light: #ACCDEE;
      --primary-light-rgb: 172, 205, 238;
      --primary-medium: #6C95B7;
      --primary-dark: #304B74;
      --primary-text: #223441;
      --gray: #8B8C89;
      --white: #FFFFFF;
      --black: #000000;

      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
      font-size: ${fontSize.primary};
      color: var(--primary-text);
    }

    body {
      margin: 0;
      padding: 0;
      background-color: var(--background-color);
    }

    h1 {
      font-size: ${fontSize.h1};
      margin: 0;
    }

    h3 {
      font-size: ${fontSize.h3};
      margin: 0
    }

    h4 {
      font-size: ${fontSize.h4};
      margin: 0;
    }

    small {
      font-size: ${fontSize.small};
    }

    a {
      color: var(--primary-text);
      text-decoration: none;
    }


    button {
      cursor: pointer;
      background-color: var(--primary-dark);
      color: var(--background-color);
      font-size: 1.2rem;
      border: none;
      padding: 10px 15px;
    }

    button: hover {
      background-color: var(--primary-text);
    }
  }
`;

export default GlobalStyles;
