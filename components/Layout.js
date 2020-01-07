import Head from "next/head";
import Navbar from "./navbar/Navbar";
import { ThemeProvider } from "emotion-theming";
import theme from "./theme";
import Container from "./container/style";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = url => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children, title, description }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>{title || ""}</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
      />
      <meta name="description" content={description} />
    </Head>
    <Navbar />
    <Container>{children}</Container>
  </ThemeProvider>
);

export default Layout;
