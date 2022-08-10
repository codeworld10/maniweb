import Navv from "../Components/Navv";
import Image from "next/image";
import Footer from "../Components/Footer";
import Link from "next/link";
import FBPIXEL from "../Components/FBPIXEL";
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
      <FBPIXEL/>
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
            src="/images/redweb.png"
            alt="maniwebdev find freelance website developer"
            width="540"
            height="420"
          ></Image>
        </div>
        <div className="seerimg2">
          <h2 className="wbd3">Website Redesign</h2>
          <span>
            <p className="serpara2">
              If you have an old or unprofessional website design and looking to
              renew, then you are at the right place. I will build a responsive
              website design for you in Figma, then show you a copy of it,
              consider changes when you are satisfied, I will start building it.
            </p>
          </span>
        </div>
      </div>
      <div className="sersec5">
        <div className="serimg33">
          <h2 className="wbd4">Search Engine Optimization</h2>
          <span>
            <p className="serpara4">
              For ranking on Google SEO is important. First, I need to do
              research about your business what people are searching for on
              google. Then I will collect and add low competition keywords so
              that your site comes in search results of Google. I will also
              submit it in the google search console, Etc.
            </p>
          </span>
        </div>
        <div className="sertext4">
          <Image
            className="serimg3"
            src="/images/seoo.png"
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
        <Link href="/contact">
          <button className="serbtnn1">Tell Us About Your Project</button>
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default services;
