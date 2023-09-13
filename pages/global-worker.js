import React from "react";
import Head from "next/head";
import Navv from "../Components/Navv";
import Image from "next/image";
import Footer from "../Components/Footer";


const globalworker = () => {
  const instacnt = () => {
    window.open("https://www.instagram.com/global__worker/");
  };
  const twitcnt = () => {
    window.open("https://twitter.com/Global__Worker");
  };
  const linkecnt = () => {
    window.open("https://www.linkedin.com/company/83532620/admin/");
  };

  const facecnt = () => {
    window.open("https://www.facebook.com/globalworker0");
  };

  const Community = () => {
    window.open("https://www.facebook.com/groups/612659427192808");
  };



  const Download = () => {
    window.open("https://play.google.com/store/apps/details?id=com.maniwebdev.globalworker")
  }

  return (
    <>
      <Head>
        <title>Global Worker| Mani Web Dev</title>
        <meta
          name="description"
          content="Find work and hire worker in your area Global Worker app."
        />
        <meta
          name="keywords"
          content="Global Worker, find work, Find worker, hire worker, work in area, worker in nearbyarea. find talent."
        />
        <meta name="author" content="Usman" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navv />

      <div className="Top-design">
        <h1 className="Global-head">Global Worker</h1>
        <p className="Global-para">
          Struggling in find work and worker in your area?<br></br>
          No worries becase Global Worker app solved this problem.
        </p>
      </div>

      <div className="Global-images">
        <div className="image-margin">
          <Image
            alt="Global worker app, find work in your area."
            src="/images/getstart.png"
            width="340"
            height="640"
          ></Image>
        </div>
        <div>
          <Image
            className="image-margin"
            alt="Global worker app, find work in your area."
            src="/images/worker.png"
            width="340"
            height="640"
          ></Image>
        </div>
        <div className="image-margin">
          <Image
            alt="Global worker app, find work in your area."
            src="/images/search.png"
            width="340"
            height="640"
          ></Image>
        </div>
      </div>
      <div className="play-center">
        <Image
        onClick={Download}
          alt="Global worker app, find work in your area."
          src="/images/play.png"
          width="250"
          height="70"
        ></Image>
      </div>
      <div>
        <h2 className="Global-about">About App</h2>
      </div>
      <div className="About-flex">
        <div>
          <Image
            className="image-margin"
            alt="Global worker app, find work in your area."
            src="/images/gwlog.png"
            width="340"
            height="640"
          ></Image>
        </div>
        <div className="details">
          <h3 className="Global-app-about">
            Find work & Hire worker in your area
          </h3>
          <p className="Global-Para">
            A simple and reliable tool to find work and hire skilled workers in
            your nearby location. The global worker application provides you the
            opportunity to find any sort of work related to your field in your
            own area. You can contact the person who is in need of a worker and
            has work related to your field. It can also help people to overcome
            the difficulties of finding reliable workers in their surroundings.
            It is easy to use and provides comprehensive data of both parties to
            each other hence it removes any doubt of negligence. You can pick up
            a worker of your own choice who is an expert in his field and you
            can also seek a person whose services are in your affordability.
          </p>
        </div>
      </div>
      <div className="Global-App">
        <div className="details">
          <h4 className="Global-app-about">App features</h4>
          <p className="Global-Para">
            You are a worker? Any skilled worker. But do you think people know
            you in your area? Once you create an account on the app publish your
            profile after this people can find you in your area and hire you.
            You can also find work by clicking on the find work icon. If someone
            posted the work. It will appear there. You can also buy and sell
            products.
          </p>
        </div>
        <div>
          <Image
            className="image-margin"
            alt="Global worker app, find work in your area."
            src="/images/explore.png"
            width="340"
            height="640"
          ></Image>
        </div>
      </div>
      <div>
        <h4 className="Global_Follow">Contact Us</h4>
        <div className="Global-Social">
          <div className="Global-icon-cent">
            <Image
              onClick={facecnt}
              src="/images/fbb.png"
              alt="contact with maniwebdev on facebook page"
              width="50"
              height="50"
            ></Image>
          </div>
          <div className="Global-icon-cent">
            <Image
              onClick={instacnt}
              src="/images/iniis.png"
              alt="contact with maniwebdev on instagram"
              width="50"
              height="50"
            ></Image>
          </div>
          <div className="Global-icon-cent">
            <Image
              onClick={linkecnt}
              src="/images/lii.png"
              alt="contact with maniwebdev on linkedin"
              width="50"
              height="50"
            ></Image>
          </div>
          <div className="Global-icon-cent">
            <Image
              onClick={twitcnt}
              src="/images/twii.png"
              alt="contact with maniwebdev on twitter"
              width="50"
              height="50"
            ></Image>
          </div>
        </div>
      </div>
      <div className="Global-community">
        <h5>Join Facebook Community</h5>
        <Image
        onClick={Community}
        src="/images/fbb.png"
        alt="contact with maniwebdev on facebook page"
        width="150"
        height="150"
      ></Image>
      </div>

      <div>
        <h6 className="Global_Follow">Download the App</h6>
        <div className="play-download">
          <Image
          onClick={Download}
            alt="Global worker app, find work in your area."
            src="/images/play.png"
            width="250"
            height="70"
          ></Image>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default globalworker;
