import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #242424; /* Dark gray background */
    color: #ffffff; /* White text */
    font-family: 'Arial', sans-serif;
  }
`;

export const theme = {
  yellow: "#FFBE0B",
  orange: "#FB5607",
  pink: "#FF006E",
  purple: "#8338EC",
  blue: "#3A86FF",
  dark: "#242424",
  light: "#ffffff",
};
