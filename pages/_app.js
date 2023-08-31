// pages/_app.js
import React,{useEffect} from 'react';
import Layout from '../Components/Layout';
import '../styles/globals.css';
import { initGA, logPageView } from '../analytics'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
