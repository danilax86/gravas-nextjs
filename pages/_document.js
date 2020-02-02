import Document, { Head, Main, NextScript } from "next/document";

//Pages in Next.js skip the definition of the surrounding document's markup
//extends the Document clas
export default class MyDocument extends Document {
  render() {
    return (
      <html lang="lv">
        <Head>
          <meta
            name="Pirts rituāli | Kāzu svinības | Viesu māja | GRAVAS"
            content="Individuāli pirts rituāli. Kāzas lauku stilā pie Bauskas. Viesu mājas īre ar aktīvo atpūtu un naktsmītnēm."
          ></meta>
          <meta charset="utf-8" />
          <meta name="robots" content="" />
          <meta name="viewport" content="width=device-width" />
          <meta name="theme-color" content="#1E514B" />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,500,600,700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcun icon" href="/static/favicon.png"></link>
        </Head>

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
              @font-face {
                font-family: "icomoon";
                src: url("../static/icon-fonts/icomoon.eot?4vgzqc");
                src: url("../static/icon-fonts/icomoon.eot?4vgzqc#iefix")
                    format("embedded-opentype"),
                  url("../static/icon-fonts/icomoon.ttf?4vgzqc")
                    format("truetype"),
                  url("../static/icon-fonts/icomoon.woff?4vgzqc") format("woff"),
                  url("../static/icon-fonts/icomoon.svg?4vgzqc#icomoon")
                    format("svg");
                font-weight: normal;
                font-style: normal;
                font-display: block;
              }

              [class^="icon-"],
              [class*=" icon-"] {
                /* use !important to prevent issues with browser extensions that change fonts */
                font-family: "icomoon" !important;
                speak: none;
                font-style: normal;
                font-weight: normal;
                font-variant: normal;
                text-transform: none;
                line-height: 1;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
              .icon-gift-card:before {
                content: "\e918";
              }
            `}
          </style>
          <script src="https://js.stripe.com/v3/"></script>
        </body>
      </html>
    );
  }
}
