import React from 'react'
import styles from '../styles/aboutme.module.css'

const Aboutme = () => {
  return (
    <>
      <section id="about">
        <div className={styles.story}>
          <h3>About me</h3>
        </div>

        <div className={styles.main_abt}>
          <div className={styles.aboutmee}>
            <p className={styles.stres}>
              🚀 Hello! I'm an experienced Web and Mobile App Developer with over 4+ years of know-how. I'm here to make great websites and mobile apps happen, using cool stuff like React, Node.js, Express, and MongoDB.<br></br>
              <br></br>
              💼 What I do best is turn design ideas into real, working websites and apps. I use a bunch of techie stuff like HTML, CSS, JavaScript, React JS, NextJs, React Native, Node JS, and MongoDB. Plus, I'm always learning about new tech to stay up-to-date.<br></br>
              <br></br>
              🌟 If you need a tech-savvy Web and Mobile App Developer who understands both your ideas and the techie side of things, let's chat about bringing your digital dreams to life!<br></br>
            </p>
          </div>
        </div>

      </section>
    </>
  )
}

export default Aboutme