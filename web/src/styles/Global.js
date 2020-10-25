import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  :root {
    --main-orange: #ff4500;
    --main-white: #fff;
    --main-gray: #f0f0f5;
    --main-text: #222;
    --secondary-text: #333;
  }

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
}

html {
  font-size: 62.5%;
  font-family: 'Roboto', -apple-system, sans-serif;
}
html,
body {
  height: 100vh;
  width: 100vw;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
}
`;

export default GlobalStyles;
