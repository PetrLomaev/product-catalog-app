import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  :root {
    --background-color: #f5f5f7;
  }

  body {
    background-color: var(--background-color);
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: background-color 0.3s ease;
  }

  #__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  * {
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;
