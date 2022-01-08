import Navv from "../Components/Navv";
import styles from "../styles/contact.module.css";
import Image from "next/image";
import Footer from "../Components/Footer";
import Action from "../Components/Action";
import Head from "next/head"
function contact() {

    const instacnt = () => {
        window.open("https://www.instagram.com/maniwebdev/");
      }
      const twitcnt = () => {
        window.open("https://twitter.com/maniwebdev");
      }
      const linkecnt = () => {
        window.open("https://www.linkedin.com/in/muhammad-usman-8444bb21a/");
      }
      const whatcnt = () => {
        window.open("https://wa.me/+923413160032");
      }
      const facecnt = () => {
        window.open("https://web.facebook.com/maniwebdev");
      }

      
  return (
    <>
      <Head>
  <title>Contact Us | Mani Web Dev</title>
  <meta name="description" content="Free Web tutorials"/>
  <meta name="keywords" content="HTML, CSS, JavaScript"/>
  <meta name="author" content="John Doe"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</Head>

      <Navv />
      <div className={styles.contact_main}>
        <div className={styles.cnt_text}>
          <h1 className={styles.headcont}>Get In Touch</h1>
          <span>
            <p>
              If you have any question about the service feel free to contact
              us.
            </p>
          </span>
          <span><p>Email:<br></br> usman000033@gmail.com</p></span>
        </div>
        <div className={styles.contactimg}>
          <div className={styles.contact_img}>
            <Image
              className={styles.cntnimg}
              src="/images/cntnt.png"
              width="500"
              height="420"
            ></Image>
          </div>
        </div>
      </div>
      <div className={styles.quick}><h2>For Quick Response</h2></div>
      <div className={styles.social_cnt}>
        <div className={styles.cntmedia}>
          <Image
            onClick={facecnt}
            src="/images/fpic.png"
            width="70"
            height="70"
          ></Image>
        </div>
        <div className={styles.cntmedia}>
          <Image
            onClick={instacnt}
            src="/images/insta.png"
            width="70"
            height="70"
          ></Image>
        </div>
        <div className={styles.cntmedia}>
          <Image
            onClick={linkecnt}
            src="/images/link.png"
            width="70"
            height="70"
          ></Image>
        </div>
        <div className={styles.cntmedia}>
          <Image
            onClick={twitcnt}
            src="/images/twit.png"
            width="70"
            height="70"
          ></Image>
        </div>
        <div className={styles.cntmedia}>
          <Image
            onClick={whatcnt}
            src="/images/what.png"
            width="70"
            height="70"
          ></Image>
        </div>
      </div>
     
      <Action/>
      <Footer />
    </>
  );
}

export default contact;
