import React from 'react'

const Testimonials = () => {
  return (
    <div>
    <div className="test">
    <h3>Testimonials</h3>
  </div>
  <div className="cardmain">
    <div className="card">
      <Image
        className="cardimg"
        src="/images/girl.jpg"
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
        src="/images/man.jpg"
        alt="kay"
        width="120"
        height="120"
      ></Image>
      <span>
        <h2 className="testih">Mr. S</h2>
      </span>
      <span>
        <p className="testip">
          I have received my work on time. he has done this job quick and
          i'm very satisified with his work so far. i will give him more
          jobs for sure if he wants in the future. well done and thx a lot.
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
  <div className="revi">
    <p>NOTE! All These Reviews Are Available On My Profiles.</p>
  </div>
    </div>
  )
}

export default Testimonials