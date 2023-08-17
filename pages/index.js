import Navv from "../Components/Navv";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Footer from "../Components/Footer";
import FBPIXEL from "../Components/FBPIXEL";
import styles from "../styles/aboutme.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import React, { useState, useEffect } from "react";
import Progress from "../Components/Progress";
import Contact from "../Components/Contact";
//import Ball from "../Components/Ball";
import styled from "styled-components";
import BlinkingStars from "../Components/BlinkingStars";
import GoogleAnalytics from "../Components/GoogleAnalytics";

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
    // simulate page loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
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

  const worker = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.maniwebdev.globalworker"
    );
  };
  const carpenter = () => {
    window.open("https://www.fahrnberger-tischler.at/");
  };
  const insta = () => {
    window.open("https://github.com/codeworld10/insta-clone");
  };
  const food = () => {
    window.open("https://github.com/codeworld10/dilevero-clone");
  };
  const notes = () => {
    window.open("https://github.com/codeworld10/notebook");
  };
  const fake = () => {
    window.open("https://github.com/codeworld10/fake-API-fetching");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <Image
        className="loader"
        src="/images/usm.png"
        alt="maniwebdev website, web app and mobile app developer."
        width="150"
        height="150"
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
            <title>Usman|Web/App Developer</title>
            <GoogleAnalytics />
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

            {/* Canonical URL */}
            <link rel="canonical" href="https://maniwebdev.com" />
            <FBPIXEL />
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
            <p className="para">I'm a passionate software developer.</p>
            <span>
              <p className="para">🚀 Helping Small Businesses Grow Online.</p>
            </span>

            <div className="butto">
              <span>
                <Link href="#portfolio" passHref>
                  <button className="btn">Portfolio</button>
                </Link>
                <Link href="#about" passHref>
                  <button className="btn2">About me</button>
                </Link>
              </span>
            </div>
          </div>
          {/* Adding the image of section1 */}
          <div className="img">
            <Image
              className="topimg"
              src="/images/usm.png"
              alt="maniwebdev web/app developer"
              width={420}
              height={420}
              priority={false}
            />
          </div>
        </div>
        <Divider className="divide" light />
        {/* section1 ends */}
        {/* section2 starts */}
        <section id="about">
          <BlinkingStars count={5} />
          <div className={styles.story}>
            <h3>About me</h3>
          </div>

          <div className={styles.main_abt}>
            <div className={styles.aboutmee}>
              <p className={styles.stres}>
                🚀 Hello and welcome! I'm a seasoned MERN Stack Developer with an exceptional track record of crafting stunning websites and dynamic mobile applications for over 4+ years. My toolkit includes React, Node.js, Express, and MongoDB, forming the foundation for my innovation and expertise.<br /><br />

                👨‍💻 My specialty lies in transforming business visions and design concepts from Figma or Adobe XD into living, breathing digital experiences. Seamlessly melding front-end and back-end technologies like HTML, CSS, JavaScript, React JS, React Native, Node JS, and MongoDB, I create cohesive and functional solutions. My toolset extends to familiar platforms like Git, VS Code, and Firebase for a comprehensive approach.<br /><br />

                📱 Beyond my professional journey, I've brought to life a thriving React Native mobile app that's continuously evolving. This serves as a testament to my proficiency in every phase of development, from conceptualization to the final product.<br /><br />

                💼 With a passion for driving growth, I take pride in helping small businesses establish a powerful online presence. My portfolio showcases a range of projects that illustrate my ability to craft highly functional and user-centric websites and mobile applications, tailored to the unique needs of each business. With a voracious appetite for learning, I'm dedicated to remaining at the forefront of emerging technologies and industry trends.<br /><br />

                🌟 If you're in search of an adept and reliable MERN Stack Developer who not only understands technology but also understands your business goals, I'm readily available to discuss and bring your unique requirements to fruition.<br /><br />

                Let's embark on a journey to turn your digital aspirations into reality!
              </p>
            </div>
          </div>

        </section>
        <Divider className="divide" light />
        <section id="portfolio">
          <div className="how">
            <h2>Portfolio</h2>
          </div>

          <div className="section2">
            <div className="secicon">
              <div className="icon">
                <Image
                  className="topimgg"
                  src="/images/icon2.png"
                  alt="maniwebdev freelance website designer near me"
                  width="64"
                  height="64"
                />
                <span className="re">
                  <h2 onClick={worker} className="he1">
                    Android App
                  </h2>
                </span>
                <span className="pre">
                  <p className="pp1" onClick={worker}>
                    Technologies: React native, MongoDB, Express.js, Nodejs
                    Amazon S3 bucket, Adobe illustrator, Figma.
                  </p>
                </span>
              </div>
            </div>
            <div className="secicon">
              <div className="icon">
                <Image
                  className="topimgg"
                  src="/images/design.png"
                  alt="maniwebdev cheap freeelance website designer"
                  width="64"
                  height="64"
                />
                <span className="re">
                  <h2 onClick={carpenter} className="he1">
                    Carpenter Website
                  </h2>
                </span>
                <span className="pre">
                  <p onClick={carpenter} className="pp1">
                    Technologies: WordPress, Ninja Forms, Elementor, Designed
                    according to the client specifications.
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div className="section2">
            <div className="secicon">
              <div className="icon">
                <Image
                  className="topimgg"
                  src="/images/notebook.png"
                  alt="maniwebdev freelance website designer near me"
                  width="64"
                  height="64"
                />
                <span className="re">
                  <h2 onClick={notes} className="he1">
                    Notes App
                  </h2>
                </span>
                <span className="pre">
                  <p className="pp1" onClick={notes}>
                    Technologies: React native, MongoDB, Express.js, Nodejs
                    private CRUD notes app for saving notes.
                  </p>
                </span>
              </div>
            </div>
            <div className="secicon">
              <div className="icon">
                <Image
                  className="topimgg"
                  src="/images/fake-api.png"
                  alt="maniwebdev cheap freeelance website designer"
                  width="64"
                  height="64"
                />
                <span className="re">
                  <h2 onClick={fake} className="he1">
                    Fake-API fetch
                  </h2>
                </span>
                <span className="pre">
                  <p onClick={fake} className="pp1">
                    Fetching products from a fake API and displaying them on the
                    screen. React native and fake-API.
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div className="section2">
            <div className="secicon">
              <div className="icon">
                <Image
                  className="topimgg"
                  src="/images/iniis.png"
                  alt="maniwebdev cheap freelance website developer near me"
                  width="64"
                  height="64"
                />
                <span className="re">
                  <h2 onClick={insta} className="he1">
                    Instagram
                  </h2>
                </span>
                <span className="pre">
                  <p onClick={insta} className="pp1">
                    Instagram pages. I have created the bottom tab nav without
                    the bottom tab navigation package.
                  </p>
                </span>
              </div>
            </div>
            <div className="secicon">
              <div className="icon">
                <Image
                  className="topimgg"
                  src="/images/food-app.png"
                  alt="maniwebdev cheap freelance website developer near me"
                  width="64"
                  height="64"
                />
                <span className="re">
                  <h2 onClick={food} className="he1">
                    Food App
                  </h2>
                </span>
                <span className="pre">
                  <p onClick={food} className="pp1">
                    Food order app design, restaurant pages, and dishes. React
                    Native and reusable components.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </section>
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
