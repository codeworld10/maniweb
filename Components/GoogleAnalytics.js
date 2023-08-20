import React from "react";
import Script from 'next/script'

const GoogleAnalytics = () => {
  return (
    <React.Fragment>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-TKRL2H1FM8"/>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TKRL2H1FM8', {
              page_path: window.location.pathname,
            });
          `,
          }}
      />
    </React.Fragment>
  );
};

export default GoogleAnalytics;
