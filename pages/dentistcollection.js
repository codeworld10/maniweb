import React from 'react';
import styles from '../styles/dentist.module.css';
import Head from 'next/head';
import Footer from '../Components/Footer';
import { useRouter } from 'next/router';

const dentistcollection = () => {
    const router = useRouter();

    const homePage = () => {
        router.push('/')
    }
    return (
        <>
            <Head>
                <title>Dentist Collection Case Study | Usman's Portfolio</title>
                <meta
                    name="description"
                    content="Discover how the Dentist Collection, developed by Usman, is revolutionizing dental practice management with its innovative, cloud-based platform. Learn more about this project's impact on efficiency, security, and patient satisfaction."
                />
                <meta
                    name="keywords"
                    content="Dentist Collection, Dental Practice Management Software, MERN Stack Project, Cloud-Based Dental Software, Patient Management System, Appointment Scheduling Software, Dental Software, Usman Developer, Portfolio, Case Study"
                />
                <meta name="author" content="Usman" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* Open Graph and Twitter Card meta tags */}
                <meta property="og:title" content="MERN Stack Developer | Usman - Web/App Developer" />
                <meta property="og:description" content="Looking for a skilled MERN Stack Developer? With over 5+ years of experience, I specialize in developing functional websites and mobile applications. Contact me today for your web and mobile app development needs." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/usm.png" />
                <meta property="og:url" content="https://maniwebdev.com" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@maniwebdev" />
            </Head>
            <p onClick={homePage} style={{paddingLeft:'10px', cursor:'pointer', fontWeight:'bold'}}>Home</p>
            <div className={styles.caseStudyContainer}>
                <div className={styles.videoContainer}>
                    <iframe
                        className={styles.videoEmbed}
                        src="https://www.youtube.com/embed/t8CH1lIJoUo?si=qrpxxsExGlgdFXmI"
                        title="Dentist Collection - Transform Your Dental Practice"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className={styles.content}>
                    <h1>Dentist Collection: Revolutionizing Dental Practice Management</h1>
                    <p>In my latest project, <strong>Dentist Collection</strong>, I've tackled the complexities of dental practice management with a <strong>cloud-based solution</strong> that enhances efficiency, security, and patient satisfaction. This innovative platform is designed to streamline appointment scheduling, centralize patient records, offer financial insights, and improve patient communication—all in one user-friendly system.</p>

                    <h2>Key Features & Benefits</h2>
                    <ul>
                        <li>Automated booking and reminders reduce no-shows and save time.</li>
                        <li>Easy access to patient histories improves care and streamlines operations.</li>
                        <li>Instant financial analytics help you understand your practice's health.</li>
                        <li>Enhanced communication tools boost patient satisfaction and loyalty.</li>
                    </ul>

                    <h2>The Impact</h2>
                    <p>Users of <strong>Dentist Collection</strong> have reported remarkable operational improvements, leading to better patient experiences and significant cost savings. It's not just a tool but a transformative platform for dental practices aiming for growth and excellence.</p>

                    <p>If you're looking to modernize your dental practice with a solution that prioritizes ease of use, security, and constant innovation, <strong>Dentist Collection</strong> is the answer. Let's connect and transform your practice management today!</p>
                </div>
            </div>
            <Footer /> 
        </>
    );
}

export default dentistcollection;