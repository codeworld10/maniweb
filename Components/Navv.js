import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Navv = () => {
  const handle = () => {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  const insta = () => {
    window.open("https://www.instagram.com/maniwebdev/");
  };
  const twit = () => {
    window.open("https://twitter.com/maniwebdev");
  };
  const linke = () => {
    window.open("https://www.linkedin.com/in/muhammad-usman-8444bb21a/");
  };
  const face = () => {
    window.open("https://web.facebook.com/maniwebdev");
  };

  return (
    //created menu for pc

    <>
      <div className="navbar">
        <div className="pcmenu">
          <div className="logomain">
            <Image
              className="logos"
              src="/images/Maniweb.png"
              alt="maniwebdev website and mobile app developer"
              width="80"
              height="80"
            />
          </div>
          <ul>
            <li className="list">
              <Link href="#home" passHref className="active" >
                Home
              </Link>

              <Link href="#about" passHref className="active">
                About me
              </Link>

              <Link href="#portfolio" passHref className="active">
                Portfolio
              </Link>

              <Link href="#contact" passHref className="active">
                Contact
              </Link>
            </li>
          </ul>
          <div className="social">
            <div className="media">
              <Image
              className="Social"
                onClick={face}
                src="/images/fbb.png"
                alt="maniwebdev Freelance website developer and designer"
                width="20"
                height="25"
              />
            </div>
            <div className="media">
              <Image
              className="Social"
                onClick={insta}
                src="/images/iniis.png"
                alt="maniwebdev best website developer near me"
                width="20"
                height="25"
              />
            </div>
            <div className="media">
              <Image
              className="Social"
                onClick={linke}
                src="/images/lii.png"
                alt="maniwebdev website developer"
                width="20"
                height="25"
              />
            </div>
            <div className="media">
              <Image
              className="Social"
                onClick={twit}
                src="/images/twii.png"
                alt="maniwebdev Freelance web developer for hire"
                width="20"
                height="25"
              />
            </div>
          </div>
        </div>
      </div>
      <header className="mobile-container ">
        <div className="logomob">
          <Image src="/images/Maniweb.png" alt="maniwebdev best website developer near me." width="150" height="150"/>
        </div>

        <nav className="topnav">
          <div className="burger">
            <div onClick={handle} className="mee">
              <div className="me"></div>
              <div className="me"></div>
              <div className="me"></div>
            </div>
          </div>

          <ul id="menu">
            <li>
              <Link href="/" passHref className="action">
                Home
              </Link>
              <Link href="#about" passHref className="action">
              About me
            </Link>
            <Link href="#portfolio" passHref className="action">
            Portfolio
          </Link>
          <Link href="#contact" passHref className="action">
          Contact
        </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navv;
