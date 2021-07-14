import React from "react";
import "./_main.scss";
import { AiOutlineCloud, AiOutlineSearch } from "react-icons/ai";
import { FaHandPointUp } from "react-icons/fa";
import { MdStayPrimaryPortrait } from "react-icons/md";

const Main = () => {
  const onMouseOver = (tag) => {
    document.querySelector(`.${tag}`)?.classList.toggle("hidden");
  };
  const onMouseOut = (tag) => {
    document.querySelector(`.${tag}`)?.classList.toggle("hidden");
  };
  return (
    <section className="main container">
      <h1 className="main__header">AFFORDABLE DIGITAL MARKETING</h1>
      <p className="main__body">
        <strong>Expand Your Reach </strong>- Your One Stop Solution For All Your
        Marketing Needs{" "}
      </p>
      <button className="main__button">GET FREE QUOTE NOW!</button>
      <div className="services">
        <div
          onMouseLeave={onMouseOut("one")}
          onMouseEnter={onMouseOver("one")}
          className="services__card"
        >
          <AiOutlineSearch style={{ fontSize: "60px", color: "#e94728" }} />
          <h3 className="services__card__header">Search Engine Optimization</h3>
          <p className="services__card__body one">
            Improve your business's <br /> search result ranking <br />
          </p>
          <a href="#" className="services__card__link">
            Learn More{" "}
          </a>
        </div>
        <div
          onMouseLeave={onMouseOut("two")}
          onMouseEnter={onMouseOver("two")}
          className="services__card"
        >
          <AiOutlineCloud style={{ fontSize: "60px", color: "#e94728" }} />
          <h3 className="services__card__header">Social Media Marketing</h3>
          <p className="services__card__body two">
            Improve your bisiness's <br /> search result ranking <br />
          </p>
          <a href="#" className="services__card__link">
            Learn More{" "}
          </a>
        </div>
        <div
          onMouseLeave={onMouseOut("three")}
          onMouseEnter={onMouseOver("three")}
          className="services__card"
        >
          <FaHandPointUp style={{ fontSize: "60px", color: "#e94728" }} />
          <h3 className="services__card__header">
            Google Adwords Pay Per Click
          </h3>
          <p className="services__card__body three">
            Improve your bisiness's <br /> search result ranking <br />
          </p>
          <a href="#" className="services__card__link">
            Learn More{" "}
          </a>
        </div>
        <div
          onMouseLeave={onMouseOut("four")}
          onMouseEnter={onMouseOver("four")}
          className="services__card"
        >
          <MdStayPrimaryPortrait
            style={{ fontSize: "60px", color: "#e94728" }}
          />
          <h3 className="services__card__header">
            Web Design & User Experience
          </h3>
          <p className="services__card__body four">
            Improve your bisiness's <br /> search result ranking <br />
          </p>
          <a href="#" className="services__card__link">
            Learn More{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Main;
