import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      font-family: Roboto, sans-serif;
    }

    body {
      position: relative;
      margin: auto;
      box-sizing: border-box;
      font-family: "Roboto", sans-serif;
      font-size: 18px;
      font-weight: 500;
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    
    .container {
      margin: 0 30px 0 150px;
      @media (min-width: 1200px) {
      margin: 0 100px 0 220px;
      }
          @media (min-width: 1400px) {
            margin-right: 200px;
            }
    }
`;
