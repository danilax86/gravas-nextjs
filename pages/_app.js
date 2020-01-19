import React from "react";
import App from "next/app";
import { appWithTranslation } from "../i18n";

//uses the App component to initialize pages
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return {
      namespacesRequired: ["navbar"],
      pageProps
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default appWithTranslation(MyApp);
