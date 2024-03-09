import Navv from "../Components/Navv";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Footer from "../Components/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import React, { useState, useEffect } from "react";
import Progress from "../Components/Progress";
import Contact from "../Components/Contact";
import styled from "styled-components";
import BlinkingStars from "../Components/BlinkingStars";
import Portfolio from "../Components/Portfolio";
import Aboutme from "../Components/Aboutme";
import Testimonials from "../Components/Testimonials";
import { track } from '@vercel/analytics';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Ball = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #f00f80;
  position: fixed;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  z-index: 9999;
  
  @media (max-width: 768px) {
    /* For tablet devices and smaller */
    display: none;
  }
`;

const index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      track('page_load_completed');
    }, 100);
  }, []);


  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);



  // You can wrap the tracking logic in a function
  const handleButtonClick = (buttonName) => {
    track('button_clicked', { buttonName });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    track('scroll_to_top_clicked');
  };

  if (isLoading) {
    return (
      <Image
        className="loader"
        src="/images/usm.png"
        alt="maniwebdev website, web app and mobile app developer."
        width="150"
        height="150"
        priority={true}
      />
    );
  }

  return (
    <>
      <Ball x={mousePos.x} y={mousePos.y} />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div>
          <Head>
            <title>Usman | Web/App Developer</title>
            <meta
              name="description"
              content="Looking for a skilled MERN Stack Developer with expertise in React, Node.js, Express, and MongoDB? Look no further! With over 4+ years of experience, I specialize in developing functional websites and mobile applications that meet business requirements. Contact me today for your web and mobile app development needs."
            />
            <meta
              name="keywords"
              content="MERN Stack Developer, React Developer, Node.js Developer, Express Developer, MongoDB Developer, Web and Mobile App Developer, Front-end Developer, Back-end Developer, React Native Developer, Full Stack Developer, website development, website design, front-end development, WordPress development, affordable website development, web design company"
            />
            <meta name="author" content="Usman" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta name="ahrefs-site-verification" content="844e7bb048f68dcad1d4d275e67d157c593ebbd7084414eb95a28cf97578b398" />
            <meta name="google-site-verification" content="8bUUelhJ0BI6lihtctl8Z4z0WDDIODpITpFxGf5QUpE" />

            <meta
              name="p:domain_verify"
              content="8cca891bf62b699c49c89a16eef4146a"
            />
            <meta
              name="facebook-domain-verification"
              content="zbf1k5wh1s6xdap2occ0q3w3z557ix"
            />
            {/* Open Graph and Twitter Card meta tags */}
            <meta property="og:title" content="MERN Stack Developer | Usman - Web/App Developer" />
            <meta property="og:description" content="Looking for a skilled MERN Stack Developer? With over 4+ years of experience, I specialize in developing functional websites and mobile applications. Contact me today for your web and mobile app development needs." />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/images/usm.png" />
            <meta property="og:url" content="https://maniwebdev.com" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@maniwebdev" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-TKRL2H1FM8"></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            
                            // Enable IP anonymization
                            gtag('set', 'anonymizeIp', true);
                            
                            gtag('config', 'G-TKRL2H1FM8');
                    `,
              }}
            />
            {/* Canonical URL */}
            <link rel="canonical" href="https://maniwebdev.com" />
            <script type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "http://schema.org",
                  "@type": "Person",
                  "name": "Muhammad Usman",
                  "jobTitle": "Website, Web App, and Mobile App Developer",
                  "url": "https://maniwebdev.com",
                  "image": "https://maniwebdev.com/images/usm.png",
                  "description": "I am Muhammad Usman, a MERN Stack Developer with a passion for creating stunning websites, web apps, and mobile apps. At maniwebdev, I offer a range of services, including website development, web app development, mobile app development, design services, and SEO. Let's bring your digital ideas to life!",
                  "sameAs": [
                    "https://www.facebook.com/maniwebdev/",
                    "https://www.tiktok.com/@maniwebdev",
                    "https://www.linkedin.com/in/usman-software-developer/",
                    "https://www.instagram.com/maniwebdev/",
                    "https://twitter.com/maniwebdev",
                    "https://github.com/codeworld10"
                  ]
                })
              }}
            />
          </Head>
        </div>
        <Navv />
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
            background: "#f00f80",
            borderTopRightRadius: "50%",
            borderTopLeftRadius: "50%",
            borderColor: "#f00f80",
            width: "10px",
            height: "50px",
            textAlign: "center"
          }}
        >^</button>
        {/* section1 starts */}
        <div className="section1">
          <div className="text">
            <div className="head">
              <h1>Hi, I am Usman!</h1>
            </div>
            <p className="para">A Passionate Web/App Developer.</p>
            <span>
              <p className="para">🚀 Helping Small Businesses Grow Online.</p>
            </span>

            <div className="butto">
              <span>
                <Link href="#portfolio" passHref>
                  <button className="btn" onClick={() => handleButtonClick('Portfolio')}>Portfolio</button>
                </Link>
                <Link href="#contact" passHref>
                  <button className="btn2" onClick={() => handleButtonClick('Contact me')}>Contact me</button>
                </Link>
              </span>
            </div>
          </div>
          {/* Adding the video of section1 */}
          <div className="img">
            <video className='demoVideo' width="500" height="280" controls loop muted>
              <source src="/video/maniwebdevintro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <Divider className="divide" light />
        {/* section1 ends */}
        {/* section2 starts */}
        <BlinkingStars count={5} />
        <section>
          <Portfolio />
        </section>
        <Divider className="divide" light />
        <section>
          <Aboutme />
        </section>
        <Divider className="divide" light />
        <Testimonials />
        <Divider className="divide" light />
        <div className="tol">
          <h3>Technologies</h3>
        </div>
        <Progress />
        <Divider className="divide" light />
        <section id="contact">
          <Contact />
        </section>
      </ThemeProvider>
      <Footer /> 
    </>
  );
};

export default index;
