import PropTypes from 'prop-types';
import Head from 'next/head';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { getTheme, GlobalStyles } from '../src/styles';
import { Nav } from '../src/components/nav';

const theme = getTheme('dark');

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Austin McBee | Software Engineer</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Krub&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <StyleSheetManager
        disableVendorPrefixes={process.env.NODE_ENV === 'development'}
      >
        <ThemeProvider theme={theme}>
          <main>
            <GlobalStyles />
            <Nav />
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </StyleSheetManager>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};

export default App;
