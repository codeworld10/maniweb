import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-TKRL2H1FM8"
      strategy="afterInteractive"
    >
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TKRL2H1FM8');
      `}
    </Script>
  );
};

export default GoogleAnalytics;
