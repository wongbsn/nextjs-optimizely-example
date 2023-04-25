// import Script from "next/script";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  html, body, #__next, main {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  
  body {
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Script
        src="https://cdn.optimizely.com/js/14072380213.js"
        strategy="beforeInteractive"
      /> */}
      <GlobalStyled />
      <Component {...pageProps} />
    </>
  );
}
