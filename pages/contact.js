import Navv from "../Components/Navv";
import styles from "../styles/contact.module.css";
import Image from "next/image";
import Footer from "../Components/Footer";

import Head from "next/head"
import Form from "../Components/Form";
import FBPIXEL from "../Components/FBPIXEL";
const contact = () => {

    const instacnt = () => {
        window.open("https://www.instagram.com/maniwebdev/");
      }
      const twitcnt = () => {
        window.open("https://twitter.com/maniwebdev");
      }
      const linkecnt = () => {
        window.open("https://www.linkedin.com/in/muhammad-usman-8444bb21a/");
      }
      const facecnt = () => {
        window.open("https://web.facebook.com/maniwebdev");
      }
      const github = () => {
        window.open("https://github.com/codeworld10");
      }

      
  return (
    <>
      <Head>
  <title>Contact Us | Mani Web Dev</title>
  <meta name="description" content="Get in touch with us. contact with us today if you have any query or just want to say just Hi."/>
  <meta name="keywords" content="Contact information of maniwebdev, maniwebdev website developer, maniwebdev website design, maniwebdev freelance services, best freelancer for hire, best freelance website developer for hire,"/>
  <meta name="author" content="Usman"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <FBPIXEL/>
</Head>

      <Navv />
      <div className={styles.contact_main}>
        <div className={styles.cnt_text}>
          <h1 className={styles.headcont}>Have Any Query?</h1>
          <span className={styles.spen}>
            <p>
              If you have any questions, suggestions or just want to share some love,  <br></br> Need help about the service feel free to contact
              us We are excited to see you.
            </p>
          </span>
         
        </div>
        <div className={styles.contactimg}>
          <div className={styles.contact_img}>
            <Image
              className={styles.cntnimg}
              src="/images/cntnt.png"
              alt="Contact with maniwebdev"
              width="400"
              height="400"
            ></Image>
          </div>
        </div>
      </div>

      <Form/>

      <div className={styles.quick}><h2>Social Contact</h2></div>
      <div className={styles.social_cnt}>
      <div className={styles.cntmedia}>
          <Image
            onClick={github}
            src="/images/github.png"
            alt="contact with maniwebdev on github."
            width="60"
            height="60"
          ></Image>
        </div>
        <div className={styles.cntmedia}>
          <Image
            onClick={facecnt}
            src="/images/fbb.png"
            alt="contact with maniwebdev on facebook page"
            width="50"
            height="50"
          ></Image>
        </div>
        <div className={styles.cntmedia}>
          <Image
            onClick={instacnt}
            src="/images/iniis.png"
            alt="contact with maniwebdev on instagram"
            width="50"
            height="50"
          ></Image>
        </div>
        <div className={styles.cntmedia}>
          <Image
            onClick={linkecnt}
            src="/images/lii.png"
            alt="contact with maniwebdev on linkedin"
            width="50"
            height="50"
          ></Image>
        </div>
        <div className={styles.cntmedia}>
          <Image
            onClick={twitcnt}
            src="/images/twii.png"
            alt="contact with maniwebdev on twitter"
            width="50"
            height="50"
          ></Image>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default contact;
