import Navv from "../Components/Navv";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Footer from "../Components/Footer";

function index() {
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
        <h2>We Value Your Business</h2>
      </div>
      <div className="para3">
        <p>
          We aim to provide you a reasonable offer. I have started my business.
          locally and now <br></br> try to expand my business to the next level
          by offereing my services online from national to international
          clients.
        </p>
      </div>

      <div className="section2">
        <div className="secicon">
          <div className="icon">
            <Image
              className="topimg"
              src="/images/research.png"
              alt="maniwebdev freelance website designer near me"
              width="64"
              height="64"
            ></Image>
            <span className="re">
              <h2 className="he1">Research & Analysis</h2>
            </span>
            <span className="pre">
              <p className="pp1">
                I do deep research on my project about business competition
                ranking etc. So that I will come out with a good idea, That will
                satisfy you.
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
              <h2 className="he1">Design</h2>
            </span>
            <span className="pre">
              <p className="pp1">
                This is the part of my CREATIVE work. I will offer you my ideas
                of design and do consider changes, or you have already thought
                about design and share your ideas with me.
              </p>
            </span>
          </div>
        </div>
        <div className="secicon2">
          <div className="icon">
            <Image
              className="topimg"
              src="/images/development.png"
              alt="maniwebdev cheap freelance website developer near me"
              width="64"
              height="64"
            ></Image>
            <span className="re">
              <h2 className="he1">Development</h2>
            </span>
            <span className="pre">
              <p className="pp1">
                It's time to convert our ideas into reality. Create Pages,
                upload content, adding responsive layouts and SEO for Google
                ranking.
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="seecicon">
          <div className="icoon">
            <Image
              className="toopimg"
              src="/images/webtest.png"
              alt="maniwebdev best freelance developer near me"
              width="64"
              height="64"
            ></Image>
            <span className="ree">
              <h2 className="he2">Testing Phase</h2>
            </span>
            <span className="pree">
              <p className="pp2">
                Website links pages are working, and the site is responsive for
                different devices and page speed, etc.
              </p>
            </span>
          </div>
        </div>
        <div className="seecicon1">
          <div className="icoon">
            <Image
              className="toopimg"
              src="/images/liveweb.png"
              alt="maniwebdev best freelance designer near me"
              width="64"
              height="64"
            ></Image>
            <span className="ree">
              <h2 className="he2">Putting Live</h2>
            </span>
            <span className="pree">
              <p className="pp2">
                Here i will push website content to the server, so that it will
                be reachable to everyone with internet connection on this
                planet.
              </p>
            </span>
          </div>
        </div>
        <div className="seecicon2">
          <div className="icoon">
            <Image
              className="toopimg"
              src="/images/deliver.png"
              alt="mani web dev professional website developer and designer"
              width="64"
              height="64"
            ></Image>
            <span className="ree">
              <h2 className="he2">Delivery</h2>
            </span>
            <span className="pree">
              <p className="pp2">
                Hooray! Now it's time to deliver your business website to you.
                when you are 100% satisfied with my work.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="test">
        <h3>Testimonials</h3>
      </div>
      <div className="cardmain">
        <div className="card">
          <Image
            className="cardimg"
            src="/images/girl.jpg"
            alt="kay"
            width="120"
            height="120"
          ></Image>
          <span>
            <h2 className="testih">Maria</h2>
          </span>
          <span>
            <p className="testip">
              I am very happy with the website that maniwebdev did for me. It
              was completed before the deadline and my requested audits are
              implemented very quickly, Thanks.
            </p>
          </span>
        </div>

        <div className="card2">
          <Image
            className="cardimg"
            src="/images/man.jpg"
            alt="kay"
            width="120"
            height="120"
          ></Image>
          <span>
            <h2 className="testih">Mr. S</h2>
          </span>
          <span>
            <p className="testip">
              I have received my work on time. he has done this job quick and
              i'm very satisified with his work so far. i will give him more
              jobs for sure if he wants in the future. well done and thx a lot.
            </p>
          </span>
        </div>

        <div className="card3">
          <Image
            className="cardimg"
            src="/images/jamatou.jpg"
            alt="kay"
            width="120"
            height="120"
          ></Image>
          <span>
            <h2 className="testih">Jamatou</h2>
          </span>
          <span>
            <p className="testip">
              Maniwebdev is absolutely the best. His responae time is very fast.
              He is providing quality work. I am very happy with his service and
              would recommend to everyone, Thanks.
            </p>
          </span>
        </div>
      </div>
      <div className="revi">
        <p>NOTE! All These Reviews Are Available On My Profiles.</p>
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
            <h4>Low Cost</h4>
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
}

export default index;
