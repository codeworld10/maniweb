import Footer from "../Components/Footer";
import Navv from "../Components/Navv";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Read the privacy policy of maniwebdev. Learn how we collect and use your information and your data protection rights. Maniwebdev website developer."
        />
        <meta
          name="keywords"
          content="maniwebdev, privacy policy, website developer, freelance website developer, website designer"
        />
        <meta name="author" content="Usman" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navv />
      <div className="pri_v">
        <h1>Privacy Policy</h1>
        <p>
          At ManiWebDev, accessible from https://maniwebdev.com/, the privacy
          and security of our visitors are our top priorities. This Privacy
          Policy explains what information we collect and how we use it. If you
          have any questions or need more information about our Privacy Policy,
          please contact us.
        </p>
        <p>
          <h2>Information Collection and Use</h2>
          We collect your information for specific purposes and obtain your
          consent when necessary. We may collect and use your information in
          the following ways:
          <ul>
            <li>To perform a contract with you.</li>
            <li>For our legitimate interests.</li>
            <li>To comply with the law.</li>
          </ul>
          We will retain your personal information only as long as necessary to
          fulfill these purposes or comply with legal obligations. If you are a
          European Economic Area resident (EEA), you have certain data
          protection rights. You can contact us to access, update, or delete your
          information or exercise other data protection rights.
        </p>
        <p>
          <h2>Log Files</h2>
          ManiWebDev follows standard log file procedures. Log files record
          visitors' internet protocol (IP) addresses, browser types, Internet
          Service Providers (ISPs), date and time stamps, and referring/exit
          pages. This information is not linked to personally identifiable
          information and is used for analysis and site administration.
        </p>
        <p>
          <h2>Our Advertising Partners</h2>
          Some advertisers on our site may use cookies and web beacons. Each
          advertising partner has its Privacy Policy, and we provide links to
          them for your reference. Third-party ad servers may use cookies and
          web beacons to measure the effectiveness of their campaigns and
          personalize advertising content. You can choose to disable cookies
          through your browser settings.
        </p>
        <p>
          <h2>Third-Party Privacy Policies</h2>
          ManiWebDev's Privacy Policy does not apply to other advertisers or
          websites. We recommend reviewing the Privacy Policies of third-party
          ad servers for more information on their practices and opt-out
          options.
        </p>
        <p>
          <h2>Consent</h2>
          By using our website, you consent to our Privacy Policy and agree to
          its terms.
        </p>
      </div>
      <div className="revsnnp">
        <h2>Revision Policy</h2>
      </div>
      <div className="refu">
        <p>
          Customer satisfaction is our primary goal. If you encounter any issues
          with your website within 15 days, please contact us to explain the
          problem. We will make every effort to promptly address and resolve any
          issues to your satisfaction.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
