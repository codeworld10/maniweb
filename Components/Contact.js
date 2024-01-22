
import styles from "../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <>
      <div className={styles.contact_main}>
        <div className={styles.cnt_text}>
          <h1 className={styles.headcont}>Have Any Query?</h1>
          <span className={styles.spen}>
            <p>
              If you have any questions, suggestions, or just want to share some love, <br /> Need help with our services, feel free to contact me. I am excited to assist you.
            </p>
          </span>
        </div>
      </div>
      <Form />
    </>
  );
};

export default Contact;
