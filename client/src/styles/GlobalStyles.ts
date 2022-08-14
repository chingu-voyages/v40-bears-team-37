import {createGlobalStyle} from 'styled-components';
import {fontSize} from './Sizes';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    :root {
      --background-color: #E8ECEF;
      --primary-light: #ACCDEE;
      --primary-medium: #6C95B7;
      --primary-dark: #304B74;
      --gray: #8B8C89;
      --white: #FFFFFF;
      --black: #000000;

      font-family: 'Roboto', sans-serif;
      font-size: ${fontSize.primary};
    }

    body {
      margin: 0;
      padding: 0;
      background-color: var(--background-color);
    }
  }
`

export default GlobalStyles;