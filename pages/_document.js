import Document, { Head, Main, NextScript } from "next/document";

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
              .icon-arrow-down:before {
                content: "\e93d";
              }
              .icon-arrow-up:before {
                content: "\e93e";
              }
              .icon-facebook:before {
                content: "\e939";
              }
              .icon-mail:before {
                content: "\e93a";
              }
              .icon-phone:before {
                content: "\e93b";
              }
              .icon-pin:before {
                content: "\e93c";
              }

              .icon-bow:before {
                content: "\e92b";
              }
              .icon-chairs:before {
                content: "\e931";
              }
              .icon-dog:before {
                content: "\e932";
              }
              .icon-gloves:before {
                content: "\e933";
              }
              .icon-paintball-mask:before {
                content: "\e934";
              }
              .icon-paintball-paint:before {
                content: "\e935";
              }
              .icon-protector:before {
                content: "\e936";
              }
              .icon-tank:before {
                content: "\e937";
              }
              .icon-uniform:before {
                content: "\e938";
              }
              .icon-archery:before {
                content: "\e91c";
              }
              .icon-back:before {
                content: "\e91d";
              }
              .icon-box:before {
                content: "\e91e";
              }
              .icon-close:before {
                content: "\e92a";
              }
              .icon-menu:before {
                content: "\e92c";
              }
              .icon-next:before {
                content: "\e92d";
              }
              .icon-paintball-balls:before {
                content: "\e92e";
              }
              .icon-paintball:before {
                content: "\e92f";
              }
              .icon-targeting-1:before {
                content: "\e930";
              }
              .icon-canopy:before {
                content: "\e929";
              }
              .icon-basketball:before {
                content: "\e920";
              }
              .icon-bonfire:before {
                content: "\e921";
              }
              .icon-cutlery:before {
                content: "\e922";
              }
              .icon-dinning:before {
                content: "\e923";
              }
              .icon-key:before {
                content: "\e924";
              }
              .icon-kitchen:before {
                content: "\e925";
              }
              .icon-parking:before {
                content: "\e926";
              }
              .icon-shower:before {
                content: "\e927";
              }
              .icon-volleyball:before {
                content: "\e928";
              }
              .icon-sauna-1:before {
                content: "\e91f";
              }
              .icon-rose-ritual:before {
                content: "\e912";
              }
              .icon-hat:before {
                content: "\e913";
              }
              .icon-massage:before {
                content: "\e91a";
              }
              .icon-people:before {
                content: "\e91b";
              }
              .icon-amber:before {
                content: "\e915";
              }
              .icon-birthday-ritual:before {
                content: "\e916";
              }
              .icon-facial-treatment:before {
                content: "\e917";
              }
              .icon-gift-card:before {
                content: "\e918";
              }
              .icon-girls-night:before {
                content: "\e919";
              }
              .icon-bed:before {
                content: "\e90f";
              }
              .icon-herbs:before {
                content: "\e910";
              }
              .icon-location:before {
                content: "\e911";
              }
              .icon-time:before {
                content: "\e914";
              }
              .icon-bamboo-massage:before {
                content: "\e900";
              }
              .icon-bathrobe:before {
                content: "\e901";
              }
              .icon-bride:before {
                content: "\e902";
              }
              .icon-cakra:before {
                content: "\e903";
              }
              .icon-couple-ritual:before {
                content: "\e904";
              }
              .icon-feet-bath:before {
                content: "\e905";
              }
              .icon-leaves-1:before {
                content: "\e906";
              }
              .icon-mask:before {
                content: "\e907";
              }
              .icon-pool:before {
                content: "\e908";
              }
              .icon-sauna:before {
                content: "\e909";
              }
              .icon-scrub:before {
                content: "\e90a";
              }
              .icon-spa:before {
                content: "\e90b";
              }
              .icon-steaming-whisk:before {
                content: "\e90c";
              }
              .icon-tea:before {
                content: "\e90d";
              }
              .icon-traditions:before {
                content: "\e90e";
              }
            `}
          </style>
          <script src="https://js.stripe.com/v3/"></script>
        </body>
      </html>
    );
  }
}
