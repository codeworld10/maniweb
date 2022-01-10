import Footer from "../Components/Footer";
import Navv from "../Components/Navv";
import Image from "next/image";
import styles from "../styles/aboutme.module.css";
import Head from "next/head";
import Action from "../Components/Action";

function aboutme() {
  return (
    <>
      <Head>
        <title>About Me | Mani Web Dev</title>
        <meta
          name="description"
          content="Here is the story of my mani web dev life and little about my skills HTML5, CSS3, Javascript, React, Nextjs, figma."
        />
        <meta
          name="keywords"
          content="mani web dev story, maniwebdev website developer, freelance website developer for hire, best freelance developer near me."
        />
        <meta name="author" content="Usman" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navv />

      <div className={styles.asection__main}>
        <div className={styles.sertxt}>
          <h1 className={styles.abtani}>Hi There,</h1>
          <span>
            <p className={styles.ser_para}>
              Welcome, here i want to tell you about the story
              <br></br> of my life and my skills.
            </p>
          </span>
        </div>

        <div className={styles.ser__tops}>
          <Image
            className={styles.img_top}
            alt="mani web dev website developer story and skills"
            src="/images/usm.jpeg"
            width="330"
            height="330"
          ></Image>
        </div>
      </div>
      <div className={styles.aboutst}>
        <p>“The purpose of our lives is to be happy.”</p>
        <p>
          “If you want to live a happy life, tie it to a goal, not to people or
          things.” Albert Einstein
        </p>
      </div>
      <div className={styles.story}>
        <h3>My Story</h3>
      </div>
      <div className={styles.main_abt}>
        <div className={styles.aboutmee}>
          <p className={styles.stres}>
            My name is Mani, the nickname of Usman. I am 21 years old and I
            started learning how to code and build websites back in 2016 after
            my father's early death. I was in much pain, and there was a gap of
            5 months in my learning. At this time, it was hard to survive. So I
            did a hard part-time job in a general store. After that, I started
            again to continue learning about how to code. Then, in the middle of
            2018, I tried to test myself. I created an account on Fiverr,
            Upwork, and started giving my services online. After this, I worked
            on some projects, and then suddenly, I couldn't get orders anymore.
            But I continued my studies and polished my skills more and more and
            tried to get website projects. At the end of 2019, I met a guy on
            social media. He is from Austria, Europe. He is an IT expert and I
            talked to him since that time. He supported me and he taught me
            valuable lessons in making business and Design. He decided to refer
            me to his friends. So, I started working again for clients. Now it's
            the end of 2021. I am going to build my brand here and looking
            forward to getting offers for doing websites worldwide someday. I
            will help and guide private persons to make their websites, and
            small companies grow online. In short, the most important lesson is
            never to give up and always focus on your goals because hard time is
            only for brave people.
          </p>
        </div>
      </div>
      <div className={styles.skil}>
        <h2>What Is Next?</h2>
      </div>
      <div className={styles.skills_d}>
        <b className={styles.set_para}>
          Currently I am building websites (Business, Portfolio, Ecommerce etc
          almost in all niches) with HTML, CSS, javascript, React, Nextjs and
          Wordpress. Now I try to polish my backend skills day by day. After
          this i'm thinking to approve app development and digital marketing.
        </b>
      </div>

      <Action />
      <Footer />
    </>
  );
}

export default aboutme;
