import '../styles/globals.css'
import Analytics from '@vercel/analytics';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Analytics />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;