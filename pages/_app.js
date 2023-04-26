import NextApp from "next/app";
import Script from "next/script";
import { createGlobalStyle } from "styled-components";
import OptimizelyOptInBar, {
  OPTIMIZELY_OPT_OUT_COOKIE,
} from "../components/OptimizelyOptInBar/OptimizelyOptInBar";

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

export default function App({ Component, pageProps, optimizelyOptOut }) {
  return (
    <>
      <Script
        src="https://cdn.optimizely.com/js/14072380213.js"
        strategy="beforeInteractive"
      />
      <GlobalStyled />
      <OptimizelyOptInBar initialOptOut={optimizelyOptOut} />
      <Component {...pageProps} />
    </>
  );
}

App.getInitialProps = async function getInitialProps(context) {
  const optimizelyOptOut = !!context.ctx.req.cookies[OPTIMIZELY_OPT_OUT_COOKIE];

  const appProps = await NextApp.getInitialProps(context);

  return {
    ...appProps,
    optimizelyOptOut,
  };
};
