import Navv from "../Components/Navv";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Footer from "../Components/Footer";
import FBPIXEL from "../Components/FBPIXEL";

const index = () => {
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
  return (
    <>
      <Head>
        <title>Home | Your Site Builder</title>

        <meta
          name="description"
          content="maniwebdev is providing best website development services from national to international clients. maniwebdev best website developer and designer. We work with passion and guarantee."
        />
        <meta
          name="keywords"
          content=" maniwebdev,freelance Website developer near me, Website company near me, Front end developer, Wordpress developer, Website desingner, Cheap website developer, cheap website developer company, website developer, website designer,"
        />
        <meta name="author" content="Usman" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="8bUUelhJ0BI6lihtctl8Z4z0WDDIODpITpFxGf5QUpE"
        />
        <meta
          name="p:domain_verify"
          content="8cca891bf62b699c49c89a16eef4146a"
        />
        <meta
          name="facebook-domain-verification"
          content="zbf1k5wh1s6xdap2occ0q3w3z557ix"
        />
        <FBPIXEL />
      </Head>
      <Navv />
      {/* section1 starts */}
      <div className="section1">
        <div className="text">
          <div className="head">
            <h1>Your Site Builder</h1>
          </div>
          <p className="para">My passion can drive your business growth</p>
          <span>
            <p className="para">
              I can create a professional website for your company
            </p>
          </span>

          <div className="butto">
            <span>
              <Link href="/services">
                <button className="btn">Services</button>
              </Link>
              <Link href="/contact">
                <button className="btn2">Contact me</button>
              </Link>
            </span>
          </div>
        </div>
        {/* Adding the image of section1 */}
        <div className="img">
          <Image
            className="topimg"
            src="/images/homtop.png"
            alt="maniwebdev Freelance website developer"
            width="420"
            height="420"
          ></Image>
        </div>
      </div>
      <div className="how">
        <h2>Portfolio</h2>
      </div>

      <div className="section2">
        <div className="secicon">
          <div className="icon">
            <Image
              className="topimg"
              src="/images/icon2.png"
              alt="maniwebdev freelance website designer near me"
              width="64"
              height="64"
            ></Image>
            <span className="re">
              <h2 onClick={worker} className="he1">
                Android App
              </h2>
            </span>
            <span className="pre">
              <p className="pp1" onClick={worker}>
                Technologies: React native, MongoDb, Expressjs, Nodejs Amazon S3
                bucket, Adobe illustrator, Figma.
              </p>
            </span>
          </div>
        </div>
        <div className="secicon1">
          <div className="icon">
            <Image
              className="topimg"
              src="/images/design.png"
              alt="maniwebdev cheap freeelance website designer"
              width="64"
              height="64"
            ></Image>
            <span className="re">
              <h2 onClick={carpenter} className="he1">
                Carpenter Website
              </h2>
            </span>
            <span className="pre">
              <p onClick={carpenter} className="pp1">
                Technologies: Wordpress, Elementor, Ninja Forms, Elementor
                header footer, Elementor essentional addons, Design according to
                the client specifications.
              </p>
            </span>
          </div>
        </div>
        <div className="secicon2">
          <div className="icon">
            <Image
              className="topimg"
              src="/images/iniis.png"
              alt="maniwebdev cheap freelance website developer near me"
              width="64"
              height="64"
            ></Image>
            <span className="re">
              <h2 onClick={insta} className="he1">
                Instagram
              </h2>
            </span>
            <span className="pre">
              <p onClick={insta} className="pp1">
                Instagram, Login feed and profile page. Intresting thing is that
                I have created the bottom tab nav without bottom tab navigation
                package. Check out on my Github.
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="choose">
        <div className="cho">
          <h3>Why Choose Me?</h3>
        </div>
      </div>
      <div className="cho_icon">
        <div className="choo_icons">
          <Image
            className="iconimg"
            src="/images/responsive.png"
            alt="maniwebdev responsive website icon image"
            width="64"
            height="64"
          ></Image>
          <span>
            <h4>Fast/Responsive</h4>
          </span>
        </div>
        <div className="choo_icons">
          <Image
            className="iconimg"
            src="/images/low.png"
            alt="maniwebdev low cost in maniwebde icon image"
            width="64"
            height="64"
          ></Image>
          <span>
            <h4>Affordable</h4>
          </span>
        </div>
        <div className="choo_icons">
          <Image
            className="iconimg"
            src="/images/support.png"
            alt="maniwebdevfreelancer website developer for hire"
            width="64"
            height="64"
          ></Image>
          <span>
            <h4>Support</h4>
          </span>
        </div>
        <div className="choo_icons">
          <Image
            className="iconimg"
            src="/images/revision.png"
            alt="maniwebdev hire freelancer website developer"
            width="64"
            height="64"
          ></Image>
          <span>
            <h4>Revision</h4>
          </span>
        </div>
      </div>
      <div className="abt">
        <Link href="/aboutme">
          <button className="abt_me">About Me</button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default index;
