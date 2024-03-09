import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/router';

const Portfolio = () => {
  const router = useRouter();
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
  const Wage = () => {
    window.open("https://www.wagewar.com/");
  };

  const Dental = () => {
    window.open("https://www.dentistcollection.com/");
  };

  const quotes = () => {
    window.open("https://acts-of-kindness-generator.vercel.app/");
  };

  const dentist = () => {
    router.push('/dentistcollection');
  }

  const visitProject = () => {
    alert("Coming soon")
  }

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
                src="/images/dlogo.png"
                alt="maniwebdev cheap freelance website designer"
                width="64"
                height="64"
              />
              <span className="re">
                <h2 onClick={Dental} className="he1">
                  Dentist Collection
                </h2>
              </span>
              <span className="pre">
                <p onClick={Dental} className="pp1">
                  Technologies: NextJs, MongoDB, Express.js, Nodejs, Amazon S3 bucket, Adobe illustrator, Figma.
                </p>
              </span>
              <button onClick={Dental} className="visit-btn">Visit</button>
              <button onClick={dentist} className="learn-more-btn">Learn More</button>
            </div>
          </div>
          <div className="secicon">
            <div className="icon">
              <Image
                className="topimgg"
                src="/images/logo.png"
                alt="maniwebdev cheap freelance website designer"
                width="64"
                height="64"
              />
              <span className="re">
                <h2 onClick={Wage} className="he1">
                  Wage War
                </h2>
              </span>
              <span className="pre">
                <p onClick={Wage} className="pp1">
                  Technologies: NextJs, MongoDB, Express.js, Nodejs, Amazon S3 bucket, Stripe, socket io, Adobe illustrator, Figma.
                </p>
              </span>
              <button onClick={Wage} className="visit-btn">Visit</button>
              <button onClick={visitProject} className="learn-more-btn">Learn More</button>
            </div>
          </div>
        </div>

        <div className="section2">
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
              <button onClick={carpenter} className="visit-btn">Visit</button>
              <button onClick={visitProject} className="learn-more-btn">Learn More</button>
            </div>
          </div>
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
              <button onClick={worker} className="visit-btn">Visit</button>
              <button onClick={visitProject} className="learn-more-btn">Learn More</button>
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
              <button onClick={notes} className="visit-btn">Visit</button>
              <button onClick={visitProject} className="learn-more-btn">Learn More</button>
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
              <button onClick={quotes} className="visit-btn">Visit</button>
              <button onClick={visitProject} className="learn-more-btn">Learn More</button>
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
              <button onClick={insta} className="visit-btn">Visit</button>
              <button onClick={visitProject} className="learn-more-btn">Learn More</button>
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
              <button onClick={food} className="visit-btn">Visit</button>
              <button onClick={visitProject} className="learn-more-btn">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio;