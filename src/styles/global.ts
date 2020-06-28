import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #292929;
    --secondary: #979797;
    --tertiary: #777777;
    --quaternary: #353535;
    --quinary: #333;
    --white: #fff;
    --black: #000;
    --purple: #7159c1;
  }

  body {
    background: var(--primary);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  #root {
    overflow: hidden;
  }

  /* todas as fontes em negrito  */
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
