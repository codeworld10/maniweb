

const GoogleAnalytics = () => {
    return (
      <>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TKRL2H1FM8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TKRL2H1FM8');
            `,
          }}
        />
      </>
    );
  };
  
  export default GoogleAnalytics;
  