import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease;
    font-family: ${({ theme }) => theme.fonts.primary};
    scroll: smooth;
    scroll-behavior: smooth;
  }
  *, html {

    scroll-behavior: smooth !important;
}
`;

export default GlobalStyle;
