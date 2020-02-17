import Document, { Head, Main, NextScript } from "next/document";

//Pages in Next.js skip the definition of the surrounding document's markup
//extends the Document clas
export default class MyDocument extends Document {
  render() {
    return (
      <html lang="lv">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-UA-24911009-1');`
            }}
          />
          <meta
            name="Pirts rituāli | Kāzu svinības | Viesu māja | GRAVAS"
            content="Individuāli pirts rituāli. Kāzas lauku stilā pie Bauskas. Viesu mājas īre ar aktīvo atpūtu un naktsmītnēm."
          ></meta>
          <meta charSet="utf-8" />
          <meta name="robots" content="" />
          <meta name="viewport" content="width=device-width" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="//staticsafari-pinned-tab.svg"
            color="#1E514B"
          />
          <meta name="msapplication-TileColor" content="#1E514B" />
          <meta name="theme-color" content="#1E514B" />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,500,600,700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcun icon" href="/static/favicon.png" />
          <link rel="manifest" href="/static/manifest.json" />
        </Head>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-UA-24911009-1" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`
          }}
        />

        <body>
          <Main />
          <NextScript />
          <style global jsx>
            {`
              body {
                font-family: "Raleway", sans-serif;
                font-display: swap;
              }
              * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
              }
            `}
          </style>
          <script src="https://js.stripe.com/v3/"></script>
        </body>
      </html>
    );
  }
}
