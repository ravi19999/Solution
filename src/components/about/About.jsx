import React from "react";
import "./_about.scss";

const About = () => {
  return (
    <section className="about container">
      <h1 className="about__header">
        <span>ABOUT </span>MIAMI SEM
      </h1>
      <div className="about__body">
        <div className="about__body__main">
          <h3 className="about__body__header">
            WE ARE DIGITAL MARKETING,SEO, <br /> AND WEB DESIGN <br />{" "}
            SPECIALISTS
          </h3>
          <p className="about__body__body">
            We put our clients first, utilizing the most up-to-date techniques
            and technology available. We are a fully Google Panda, Hummingbird,
            Penguin-compliant Search Engine (SEO) and Social Media Optimization
            services provider. Your business’s online presence needs to be
            current in order to be competitive in today’s digital landscape- we
            can help!
          </p>
        </div>
        <div className="about__body__video">
          <iframe
            width="500px"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
      </div>
      <center>
        <button className="about__about-us">Learn More About Us</button>
      </center>
    </section>
  );
};

export default About;
