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

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

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
  const food = () => {
    window.open("https://github.com/codeworld10/dilevero-clone");
  };
  const notes = () => {
    window.open("https://github.com/codeworld10/notebook");
  };
  const fake = () => {
    window.open("https://github.com/codeworld10/fake-API-fetching");
  };
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Head>
          <title>Usman | Software Developer</title>

          <meta
            name="description"
            content="maniwebdev is providing best website development services from national to international clients. maniwebdev best website developer and designer. We work with passion and guarantee."
          />
          <meta
            name="keywords"
            content=" maniwebdev,freelance Website developer near me, Website company near me, Front end developer, Wordpress developer, Website desingner, Cheap website developer, cheap website developer company, website developer, website designer,"
          />
          <meta name="author" content="Usman" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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
              <h1>Hi, I am Usman!</h1>
            </div>
            <p className="para">A passionate software developer!</p>
            <span>
              <p className="para">I like to work with teams and companies.</p>
            </span>

            <div className="butto">
              <span>
                <Link href="/services" passHref>
                  <button className="btn">Services</button>
                </Link>
                <Link href="/contact" passHref>
                  <button className="btn2">Contact me</button>
                </Link>
              </span>
            </div>
          </div>
          {/* Adding the image of section1 */}
          <div className="img">
            <Image
              className="topimg"
              src="/images/usm.png"
              alt="maniwebdev Freelance website developer"
              width="420"
              height="420"
            ></Image>
          </div>
        </div>
        <Divider className="divide" light />
        {/* section1 ends */}
        {/* section2 starts */}
        <div className={styles.story}>
          <h3>About me</h3>
        </div>
        <div className={styles.main_abt}>
          <div className={styles.aboutmee}>
            <p className={styles.stres}>
              🚀 Welcome! I am a highly skilled Full Stack Developer with over
              4+ years of experience in developing websites and mobile
              applications using MERN stack and React Native. 👨‍💻 I specialize in
              translating business requirements and Figma/Adobe XD designs into
              fully functional websites or mobile applications. My technical
              skills include front-end and back-end technologies such as HTML,
              CSS, JavaScript, React JS, React Native, Node JS, and MongoDB. I
              am also familiar with tools like Git, VS Code, and Firebase. 📱 In
              addition to my professional experience, I have also developed a
              real-world React Native mobile app that is continuously growing.
              This showcases my expertise in handling everything from ideation
              to product development. 💼 My portfolio includes several projects
              demonstrating my proficiency in developing highly functional and
              user-friendly websites and mobile applications. I am a quick
              learner and have a keen interest in staying up-to-date with the
              latest technologies and trends. 🌟 If you are looking for a highly
              skilled and reliable Full Stack Developer, I am available to
              discuss your requirements.
            </p>
          </div>
        </div>
        <Divider className="divide" light />
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
              ></Image>
              <span className="re">
                <h2 onClick={worker} className="he1">
                  Android App
                </h2>
              </span>
              <span className="pre">
                <p className="pp1" onClick={worker}>
                  Technologies: React native, MongoDB, Express.js, Nodejs Amazon
                  S3 bucket, Adobe illustrator, Figma.
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
              ></Image>
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
              ></Image>
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
              ></Image>
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
              ></Image>
              <span className="re">
                <h2 onClick={insta} className="he1">
                  Instagram
                </h2>
              </span>
              <span className="pre">
                <p onClick={insta} className="pp1">
                  Instagram pages. I have created the bottom tab nav without the
                  bottom tab navigation package.
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
              ></Image>
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
        <Divider className="divide" light />
        <div className="tol">
          <h3>My Skills</h3>
        </div>
        <div className="tolls">
          <div className="tollimg">
            <Image
              className="toolimg"
              src="/images/htm.png"
              alt="mani web dev create website with html"
              width="50"
              height="50"
            ></Image>
          </div>
          <div className="tollimg">
            <Image
              className="toolimg"
              src="/images/cs3.png"
              alt="mani web dev creates website with css3"
              width="60"
              height="50"
            ></Image>
          </div>
          <div className="tollimg">
            <Image
              className="toolimg"
              src="/images/js.png"
              alt="mani web dev creates website with javascript"
              width="70"
              height="50"
            ></Image>
          </div>
        </div>

        <div className="tolls1">
          <div className="tollimg1">
            <Image
              className="toolimg1"
              src="/images/rea.png"
              alt="mani web dev creates website with nextjs"
              width="50"
              height="50"
            ></Image>
          </div>
          <div className="tollimg1">
            <Image
              className="toolimg1"
              src="/images/nex.png"
              alt="mani web dev creates website with nextjs"
              width="70"
              height="50"
            ></Image>
          </div>
          <div className="tollimg">
            <Image
              className="toolimg"
              src="/images/rea.png"
              alt="mani web dev creates website with reactjs"
              width="50"
              height="50"
            ></Image>
          </div>
        </div>

        <div className="tolls1">
          <div className="tollimg1">
            <Image
              className="toolimg1"
              src="/images/mongo.png"
              alt="mani web dev creates website with nextjs"
              width="50"
              height="50"
            ></Image>
          </div>
          <div className="tollimg1">
            <Image
              className="toolimg1"
              src="/images/js.png"
              alt="mani web dev creates website with nextjs"
              width="50"
              height="50"
            ></Image>
          </div>
          <div className="tollimg1">
            <Image
              className="toolimg1"
              src="/images/node.png"
              alt="mani web dev creates websites with wordpess"
              width="50"
              height="50"
            ></Image>
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default index;
