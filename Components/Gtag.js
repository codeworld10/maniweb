import React from 'react'



function Gtag() {
    return (
        <>
       
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-TKRL2H1FM8"></Script>
<Script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-TKRL2H1FM8');
</Script> 
        </>
    )
}

export default Gtag;
