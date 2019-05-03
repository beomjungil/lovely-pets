import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Heebo', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    color: ${(props) => props.theme.colors.black};
    background: ${(props) => props.theme.colors.gray100};
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p  {
    margin: 0;
  }
  
  h1,
  h2,
  h3 {
    font-weight: 700;
  }
  
  h1 {
    font-size: 3.5rem;
  }
`;
