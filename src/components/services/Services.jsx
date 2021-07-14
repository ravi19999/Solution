import React from "react";
import "./_services.scss";

const Services = () => {
  return (
    <section className="services half-container">
      <h1 className="services__header">PICK A SERVICE TO VIEW ITS PRICING</h1>
      <div className="services__container">
        <h4 className="services__container__content">
          SEARCH ENGINE OPTIMIZATION
        </h4>
        <h4 className="services__container__content">PAY PER CLICK</h4>
        <h4 className="services__container__content">SOCIAL MEDIA</h4>
        <h4 className="services__container__content">WEB DESIGN</h4>
      </div>
      <center>
        <h1 className="services__second-header">SEARCH ENGINE OPTIMIZATION</h1>
        <p className="services__sub-header">Prices Starting At $%95/MO</p>

        <div className="services__cards">
          <div className="card__header">
            <center>
              <h3 className="card__header__text">GALACTIC</h3>
              <h1 className="card__header__money">
                <span>$</span> 1295 <span>/mo</span>
              </h1>
              <button className="card__header__learn-more">LEARN MORE</button>
            </center>
          </div>
        </div>
      </center>
    </section>
  );
};

export default Services;
