import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <div id="fb-root" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/zh_HK/sdk.js#xfbml=1&version=v2.8&appId=1383856901655260";
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));`,
            }}
          />
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
              if (mediaQuery.matches) {
                document.body.setAttribute('data-dark-mode', '');
              } else {
                document.body.removeAttribute('data-dark-mode');
              }
            `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                  (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                  m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
              })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
          
              ga('create', 'UA-51297067-2', 'auto');
              ga('send', 'pageview');`,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
