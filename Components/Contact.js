import styles from "../styles/contact.module.css";
import Head from "next/head"
import Form from "./Form";
import FBPIXEL from "./FBPIXEL";
const Contact = () => {
  return (
    <>
      <Head>
  <FBPIXEL/>
</Head>

      <div className={styles.contact_main}>
        <div className={styles.cnt_text}>
          <h1 className={styles.headcont}>Have Any Query?</h1>
          <span className={styles.spen}>
            <p>
              If you have any questions, suggestions or just want to share some love,  <br></br> Need help about the service feel free to contact
              me I am excited to see you.
            </p>
          </span>
        </div>
      </div>
      <Form/>
    </>
  );
}

export default Contact;
