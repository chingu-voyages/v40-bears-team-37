import {createGlobalStyle} from 'styled-components';
import {fontSize} from './Sizes';

const GlobalStyles = createGlobalStyle`
  * {
    :root {
      --background-color: #C8CFD9;
      --primary-light: #ACCDEE;
      --primary-medium: #6C95B7;
      --primary-dark: #304B74;
      --primary-text: #223441;
      --gray: #8B8C89;
      --white: #FFFFFF;
      --black: #000000;

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

    small {
      font-size: ${fontSize.small};
    }

    button {
      cursor: pointer;
      background-color: var(--primary-dark);
      color: var(--background-color);
      font-size: 1.2rem;
      border: 2px solid var(--primary-dark);;
      padding: 10px 15px;
    }

    // TODO: hover effect looks a bit weird
    button: hover {
      background-color: var(--background-color);
      color: var(--primary-dark);
    }
  }
`

export default GlobalStyles;