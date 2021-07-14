import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./_whyUs.scss";

const WhyUs = () => {
  return (
    <section className="why-us half-container">
      <div className="why-us__left">
        <h3 className="why-us__left__header">WHY US?</h3>
        <p className="why-us__left__body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          inventore velit, reiciendis, odio excepturi assumenda, nulla ipsum
          consequatur deleniti temporibus saepe beatae accusantium quidem
          aspernatur harum voluptatum unde nam voluptas! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Unde soluta ratione quae odio quos
          voluptate quam cumque nam magnam dolorum obcaecati voluptatum impedit,
          voluptatem dolorem? At error repudiandae ab dolorum?
        </p>

        <button className="why-us__left__button"> LEARN MORE ABOUT US</button>
      </div>
      <div className="why-us__right">
        <div className="why-us__right__cards">
          <div className="why-us__right__cards__card">
            <AiOutlineCheckCircle
              style={{ fontSize: "40px", color: "white" }}
            />
            <div>
              <h4>Top Local Listing Strategies</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                voluptatem, laboriosam amet esse optio veniam eum? Iure dolore
                doloremque commodi dolores illum ea nesciunt. Sapiente atque
                quia dolor itaque aut.
              </p>
            </div>
          </div>
          <div className="why-us__right__cards__card">
            <AiOutlineCheckCircle />
            <div>
              <h4>Top Local Listing Strategies</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                voluptatem, laboriosam amet esse optio veniam eum? Iure dolore
                doloremque commodi dolores illum ea nesciunt. Sapiente atque
                quia dolor itaque aut.
              </p>
            </div>
          </div>
          <div className="why-us__right__cards__card">
            <AiOutlineCheckCircle />
            <div>
              <h4>Top Local Listing Strategies</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                voluptatem, laboriosam amet esse optio veniam eum? Iure dolore
                doloremque commodi dolores illum ea nesciunt. Sapiente atque
                quia dolor itaque aut.
              </p>
            </div>
          </div>
        </div>
        <div className="why-us__right__cards">
          <div className="why-us__right__cards__card">
            <AiOutlineCheckCircle />
            <div>
              <h4>Top Local Listing Strategies</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                voluptatem, laboriosam amet esse optio veniam eum? Iure dolore
                doloremque commodi dolores illum ea nesciunt. Sapiente atque
                quia dolor itaque aut.
              </p>
            </div>
          </div>
          <div className="why-us__right__cards__card">
            <AiOutlineCheckCircle />
            <div>
              <h4>Top Local Listing Strategies</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                voluptatem, laboriosam amet esse optio veniam eum? Iure dolore
                doloremque commodi dolores illum ea nesciunt. Sapiente atque
                quia dolor itaque aut.
              </p>
            </div>
          </div>
          <div className="why-us__right__cards__card">
            <AiOutlineCheckCircle />
            <div>
              <h4>Top Local Listing Strategies</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                voluptatem, laboriosam amet esse optio veniam eum? Iure dolore
                doloremque commodi dolores illum ea nesciunt. Sapiente atque
                quia dolor itaque aut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
