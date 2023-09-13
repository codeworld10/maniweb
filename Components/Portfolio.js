import React from 'react'
import Image from "next/image";

const Portfolio = () => {

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

  const linked = () => {
    window.open("https://linkedin-clone-azure-nu.vercel.app/");
  };

  const quotes = () => {
    window.open("https://acts-of-kindness-generator.vercel.app/");
  };
  return (
    <div>
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
                src="/images/lii.png"
                alt="maniwebdev freelance website designer near me"
                width="64"
                height="64"
              />
              <span className="re">
                <h2 onClick={linked} className="he1">
                  LinkedIn
                </h2>
              </span>
              <span className="pre">
                <p className="pp1" onClick={linked}>
                  Technologies: Created LinkedIn design using NextJs.
                  Click here to check live project.
                </p>
              </span>
            </div>
          </div>
          <div className="secicon">
            <div className="icon">
              <Image
                className="topimgg"
                src="/images/quotes.png"
                alt="maniwebdev cheap freeelance website designer"
                width="64"
                height="64"
              />
              <span className="re">
                <h2 onClick={quotes} className="he1">
                  Quotes Generator
                </h2>
              </span>
              <span className="pre">
                <p onClick={quotes} className="pp1">
                  Acts of kindness generator a tool that generates acts of kindess when you click on generate button.
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
    </div>
  )
}

export default Portfolio