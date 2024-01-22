import React from 'react'; // Assuming you have a CSS module for styling
import styles from '../styles/wagewar.module.css';
import Footer from "../Components/Footer";
import Navv from "../Components/Navv";

const wagewar = () => {
    return (
        <>
            <div className={styles.navContainer}>
                <Navv />
            </div>
            <div className={styles.container}>
                <h1 className={styles.mainHeading}>Learn More About Wage War</h1>

                <div className={styles.videoContainer}>
                    {/* Placeholder for video */}
                    <iframe
                        width="560"
                        height="315"
                        src="YOUR_VIDEO_EMBED_LINK"
                        title="Wage War Project Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className={styles.content}>
                    {/* Your content goes here */}
                    <h2 className={styles.subHeading}>Introduction to Wage War</h2>
                    <p>
                        Wage War is an innovative platform designed to transform how job seekers and companies connect in the construction and home services industries. At its core, "Wage War" aims to empower individuals with better income opportunities while enabling companies to discover and hire talented professionals effortlessly. This unique project focuses on facilitating direct job offers, enhancing the recruitment process, and creating a dynamic job marketplace.
                    </p>
                    <h3 className={styles.subHeading}>The Visionary Behind the Project</h3>
                    <p>
                        The brainchild of "Wage War" is Maniwebdev, a dedicated and skilled MERN stack developer. With a passion for creating solutions that make a real-world impact, Maniwebdev embarked on this journey as a solo developer, bringing "Wage War" from concept to reality. This project showcases not only technical proficiency but also a deep understanding of the employment challenges and opportunities in today's fast-paced world.
                    </p>
                    <h4 className={styles.subHeading}>Project Features and Technologies</h4>
                    <p>
                        "Wage War" is a testament to the innovative use of technology, utilizing the MERN stack (MongoDB, Express.js, React, Node.js), along with real-time messaging via Socket.IO...
                    </p>
                    <ul>
                        <li><strong>Dual Categories for Users:</strong> Catering to both construction and home service sectors.</li>
                        <li><strong>Advanced Search Capabilities:</strong> Users can find talent or jobs based on skills, location, and other filters.</li>
                        <li><strong>Real-Time Communication:</strong> Facilitated through Socket.IO, allowing instant messaging and updates.</li>
                        <li><strong>User Profiles and Management:</strong> Users can publish and update profiles, extending visibility and opportunities.</li>
                        <li><strong>Subscription Services:</strong> Offering premium features like analytics for both job seekers and companies.</li>
                        <li><strong>Feedback and Review System:</strong> Enabling companies and job seekers to rate each other, fostering trust and transparency.</li>
                        <li><strong>Email Notifications:</strong> Automated alerts for job offers, acceptances, and rejections, keeping users informed.</li>
                        <li><strong>Direct Offer System:</strong> Companies can send offers directly to job seekers, who have the freedom to accept or reject.</li>
                    </ul>
                    <h5 className={styles.subHeading}>Challenges and Triumphs</h5>
                    <p>Developing "Wage War" was a journey filled with challenges, primarily tackled single-handedly by Maniwebdev. From conceptualizing the user experience to implementing complex features like real-time communication and subscription services, each step was a learning opportunity. Overcoming these obstacles has not only refined technical skills but also enriched problem-solving abilities and strategic thinking.</p>
                    <h6 className={styles.subHeading}>Impact and User Experience</h6>
                    <p>Wage War" significantly impacts how job seekers and companies interact. Its intuitive design and user-centric approach make it easier for job seekers to find suitable employment while providing companies with a pool of qualified candidates. The platform's innovative features, like the direct offer system and real-time messaging, enhance the overall efficiency of the job market.</p>
                    <h6 className={styles.subHeading}>Future Enhancements</h6>
                    <p>Continual improvement is at the heart of "Wage War". Plans for future upgrades include more refined analytics, enhanced user interface, and expanding the platform's reach to additional industries. These improvements aim to further streamline the job matching process and provide an even more robust experience for users.</p>
                    <h6 className={styles.subHeading}>
                        A Personal Touch
                    </h6>
                    <p>
                        To give you an insider's view, a video presentation, including an introduction by Maniwebdev, is available. This video offers a unique perspective on the project's development and showcases the human element behind this technological innovation.
                    </p>
                    <h6 className={styles.subHeading}>Conclusion</h6>
                    <p>"Wage War" is more than just a platform; it's a movement towards a more efficient and equitable job market. Whether you're a company seeking talent or a job seeker looking for your next opportunity, "Wage War" is your gateway to a world of possibilities. Experience the revolution in job hunting and talent acquisition - explore "Wage War" now.</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default wagewar;
