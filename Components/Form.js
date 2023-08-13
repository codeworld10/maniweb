import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import styles from "../styles/contact.module.css";

const Result = () => {
  return (
    <p className="frmpr_r">
      Thank you for your inquiry. We will get in touch with you soon!
    </p>
  );
};

const Form = (props) => {
  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b0n4upa",
        "template_9np2vfo",
        e.target,
        "user_n4Y2Swbi2MnJJLYCunc9c"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  const instacnt = () => {
    window.open("https://www.instagram.com/maniwebdev/");
  };
  const twitcnt = () => {
    window.open("https://twitter.com/maniwebdev");
  };
  const linkecnt = () => {
    window.open("https://www.linkedin.com/in/muhammad-usman-8444bb21a/");
  };
  const facecnt = () => {
    window.open("https://web.facebook.com/maniwebdev");
  };
  const github = () => {
    window.open("https://github.com/codeworld10");
  };

  return (
    <>
      <div className="frmcntr">
        <form ref={form} action="" onSubmit={sendEmail}>
          <div className="formwork">
            <div className={styles.social_cnt}>
              <div className={styles.cntmedia}>
                <Image
                className="Social"
                  onClick={github}
                  src="/images/github.png"
                  alt="contact with maniwebdev on github."
                  width="30"
                  height="30"
                />
              </div>
              <div className={styles.cntmedia}>
                <Image
                className="Social"
                  onClick={facecnt}
                  src="/images/fbb.png"
                  alt="contact with maniwebdev on facebook page"
                  width="30"
                  height="30"
                />
              </div>
              <div className={styles.cntmedia}>
                <Image
                className="Social"
                  onClick={instacnt}
                  src="/images/iniis.png"
                  alt="contact with maniwebdev on instagram"
                  width="30"
                  height="30"
                />
              </div>
              <div className={styles.cntmedia}>
                <Image
                className="Social"
                  onClick={linkecnt}
                  src="/images/lii.png"
                  alt="contact with maniwebdev on linkedin"
                  width="30"
                  height="30"
                />
              </div>
              <div className={styles.cntmedia}>
                <Image
                className="Social"
                  onClick={twitcnt}
                  src="/images/twii.png"
                  alt="contact with maniwebdev on twitter"
                  width="30"
                  height="30"
                />
              </div>
            </div>
            <h2 className="frmt">Get In touch</h2>
            <span className="frtxt">Full name</span>
            <br></br>
            <input className="input100" type="text" name="fullName" required />
            <br></br>

            <span className="frtxt">Email</span>
            <br></br>
            <input className="input100" type="text" name="email" required />
            <br></br>

            <span className="frtxt">Phone</span>
            <br></br>
            <input className="input100" type="text" name="Phone" />
            <br></br>

            <span className="frtxt">Company</span>
            <br></br>
            <input className="input100" type="text" name="company" required />
            <br></br>
            <span className="frtxt">Message</span>
            <br></br>
            <textarea className="messagee" name="message" required></textarea>
            <br></br>
            <div className="ctbtn">
              <button className="btrr">Submit</button>
            </div>
            <div className="row">{result ? <Result /> : null}</div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
