import React from 'react'
import Image from "next/image";
import {FcGoogle} from 'react-icons/fc'
import Head from 'next/head';

const Testimonials = () => {
const google = () => {
  window.open("https://goo.gl/maps/9UgPSVrKKowZyLdF9")
}
  return (
    <div>
    <Head>
    {/* Add meta tags for SEO */}
    <meta
        name="description"
        content="Read what our clients have to say about our web and mobile app development services. Check out these testimonials from satisfied customers."
    />
    <meta
        name="keywords"
        content="testimonials, client reviews, web development, mobile app development"
    />
</Head>
    <div className="test">
    <h3>Testimonials</h3>
  </div>
  <div className="cardmain">
    <div className="card">
      <Image
        className="cardimg"
        src="/images/Maria.jpg"
        alt="kay"
        width="120"
        height="120"
      ></Image>
      <span>
        <h2 className="testih">Maria</h2>
      </span>
      <span>
        <p className="testip">
          I am very happy with the website that maniwebdev did for me. It
          was completed before the deadline and my requested audits are
          implemented very quickly, Thanks.
        </p>
      </span>
    </div>

    <div className="card2">
      <Image
        className="cardimg"
        src="/images/mr.jpg"
        alt="kay"
        width="120"
        height="120"
      ></Image>
      <span>
        <h2 className="testih">Mr. S</h2>
      </span>
      <span>
        <p className="testip">
          I have received my work on time. He has done this job quick and
          I'm very satisified with his work so far. I will give him more
          jobs for sure if he wants in the future. Well done and thx a lot.
        </p>
      </span>
    </div>

    <div className="card3">
      <Image
        className="cardimg"
        src="/images/jamatou.jpg"
        alt="kay"
        width="120"
        height="120"
      ></Image>
      <span>
        <h2 className="testih">Jamatou</h2>
      </span>
      <span>
        <p className="testip">
          Maniwebdev is absolutely the best. His responae time is very fast.
          He is providing quality work. I am very happy with his service and
          would recommend to everyone, Thanks.
        </p>
      </span>
    </div>
  </div>
  <div onClick={google} className="revi">
  <button className='google-btn'>More on {''} <FcGoogle style={{paddingLeft:"5px"}} size={20} /></button>
  </div>
    </div>
  )
}

export default Testimonials