import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --main-orange: #ff6600;
    --main-white: #fff;
    --main-gray: #f0f0f5;
    --secondary-gray: #888;
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
