import Navv from "../Components/Navv";
import Image from "next/image";
import Footer from "../Components/Footer";
import Link from "next/link";
import Head from "next/head";

const services = () => {
  return (
    <>
      <Head>
        <title>Services | Mani Web Dev</title>
        <meta
          name="description"
          content="Mani Web dev provides best services to his clients with 100% satisfaction and guarantee. If you need website for your business website or you need company website, woocommerce website or nextjs website then feel free to contact Mani web dev."
        />
        <meta
          name="keywords"
          content="maniwebdev, Website services, Website developer,freelance website developer sites,freelance wordpress developer needed,denver freelance wordpress developer,hire wordpress developer,wordpress freelancer near me,web developer for hire,website designer freelancer,front end web developer for hire, front end web developer for hire, best website developer near me, website design services."
        />
        <meta name="author" content="Usman" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navv />

      <div className="sermain">
        <div className="serteext">
          <h1 className="serani">My Services</h1>
          <span>
            <p className="ser_para">
              My goal is to provide you good services with 100% satisfaction.
              <br></br> Here is the list of services that I am giving.
            </p>
          </span>
        </div>

        <div className="sertoop">
          <Image
            className="sertoup"
            src="/images/sertop.png"
            alt="maniwebdev hire wordpress designer"
            width="500"
            height="420"
          ></Image>
        </div>
      </div>

      <div className="wido">
        <h2>What I Do?</h2>
      </div>
      <div className="sersec2">
        <div className="sertext">
          <Image
            className="serimg"
            src="/images/webdev.png"
            alt="maniwebdev freelance web developer website"
            width="500"
            height="420"
          ></Image>
        </div>
        <div className="seirimg">
          <h2 className="wbd">Website Development</h2>
          <span>
            <p className="serpara">
              For improving your online presence. You need a website for your
              business. I will build a website according to your business need.
              it's pretty simple all you need to do is provide about your
              business so that I will do deep research on it and build a good
              website for you.
            </p>
          </span>
        </div>
      </div>
      <div className="sersec3">
        <div className="seerimg1">
          <h2 className="wbd1">Website Design</h2>
          <span>
            <p className="serpara1">
              Design is not just what it looks like and feels like. Design is
              how it works, saying 'Steve jobs.' Yes, I will design that really
              describes your business to your audience so that they can
              understand it easily. This is the real approach of a designer to
              make it simple and easy.
            </p>
          </span>
        </div>
        <div className="sertext1">
          <Image
            className="serimg1"
            src="/images/webdesign.png"
            alt="maniwebdev hire best website developer freelancer"
            width="540"
            height="420"
          ></Image>
        </div>
      </div>

      <div className="sersec4">
        <div className="sertext2">
          <Image
            className="serimg2"
            src="/images/mobile-app.png"
            alt="maniwebdev find freelance website developer"
            width="540"
            height="420"
          ></Image>
        </div>
        <div className="seerimg2">
          <h2 className="wbd3">App Developemnt</h2>
          <span>
            <p className="serpara2">
            I will develop a hybrid app for you in React Native. If you have any design in AdobeXd or Figma
            I will convert it into a functional mobile application. I also have my personal real-world growing 
            app from where I learned so much about design and how to engage the users etc.
            </p>
          </span>
        </div>
      </div>
      <div className="sersec5">
        <div className="serimg33">
          <h2 className="wbd4">Social Media Marketing</h2>
          <span>
            <p className="serpara4">
            Social media marketing is the best way to brand awareness and lead generation.
            Now everyone has a mobile phone. So, it's a great opportunity for you to promote your business on social media.
             I will promote your business on social media and generate leads for you.
             I am also doing marketing on my personal projects.
            </p>
          </span>
        </div>
        <div className="sertext4">
          <Image
            className="serimg3"
            src="/images/marketing.png"
            alt="maniwebdev search engine optimization service in maniwebdev"
            width="540"
            height="420"
          ></Image>
        </div>
      </div>

      <div className="qute">
        <div className="qutehe">
          <h3>Get A Free Quote</h3>
        </div>
        <div className="qupra">
          <p className="qupra1">
            Feel Free To Contact us if you'd like a quote or more information.
          </p>
        </div>
        <br></br>
        <Link href="/contact" passHref>
          <button className="serbtnn1">Tell Us About Your Project</button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default services;
