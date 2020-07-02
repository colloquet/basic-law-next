import Head from 'next/head';

import useDarkMode from '@/hooks/useDarkMode';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import BottomBar from '@/components/BottomBar/BottomBar';
import './global.scss';

function MyApp({ Component, pageProps }) {
  const { darkMode } = useDarkMode();
  return (
    <div>
      <Head>
        <title>香港CRE基本法測試 | 香港CRE基本法測試</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="theme-color" content={darkMode ? '#282828' : '#e74c3c'} />

        <meta name="title" content="香港CRE基本法測試" />
        <meta name="author" content="Colloque Tsui" />
        <meta
          name="description"
          content="提供香港基本法全文和CRE測試練習題。"
        />
        <meta
          name="keywords"
          content="香港,基本法,全文,測試,練習題,基本法考試題目,基本法測試題目,基本法考試"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@colloquet" />
        <meta name="twitter:title" content="香港CRE基本法測試" />
        <meta
          name="twitter:description"
          content="香港基本法全文和測試練習題。"
        />
        <meta name="twitter:creator" content="@colloquet" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e74c3c" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
      </Head>

      <Navbar />

      <div className="route-container">
        <Component {...pageProps} />

        <hr />
        <Footer />
      </div>

      <BottomBar />
    </div>
  );
}

export default MyApp;
