import React from "react";

const GoogleAnalytics = () => {
  const console = () =>{
    console.log("working")
  }
  return (
    <React.Fragment>
      <script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-TKRL2H1FM8"/>
      <script
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
