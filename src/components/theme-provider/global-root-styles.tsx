import { createGlobalStyle } from "styled-components";

const GlobalRootStyles = createGlobalStyle`
  * { margin: 0; padding: 0; }
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  }
`;

export default GlobalRootStyles;
