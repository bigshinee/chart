import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  
  body {
    flex-grow: 1;
    font-size: 14px;
    font-weight: 400;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;
