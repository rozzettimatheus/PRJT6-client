import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  :root {
    --bg: #292929;
    --bg-nav: #222222;
    --input-color: #353535;
    --hover-color: #313131;
    --card-color: #303030;
    --border-color: #3a3a3a;

    --text: #dad7d2; 
    --text-accent: #fafafa;
    --text-darken: #777777;
    --disabled-text: #555555;

    --error: #f44336;
    --success: #078714;
    --edit-icon: #999999;
    --close-icon: #666666;
    --white: #fff;
    --black: #000;
    --purple: #bb86fc;

    --border-radius: 5px;
    --nav-height: 60px;

    --max-width: 975px;

    /** public pages */
    --wrapper-max-width: 700px;
    
    --animated-container: 50%;
    --animeted-container-media: 65%; 

    --logo: 16%;
    --logo-media: 13%;

    --form-max-width: 420px;
    --form-margin: 3rem 0;
    --form-title-size: 2.4rem;
    --form-title-margin-bottom: 2.4rem;

    --bg-cover-opacity: 0.7;
  }

  body {
    background: var(--bg);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
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

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @media (max-height: 502px) {

    html {
      font-size: 50%;
    }
  }
`;
