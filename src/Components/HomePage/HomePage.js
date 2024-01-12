import React, { useRef } from "react";
import Contact from "../Contacts/Contact";
import "./HomePage.css";
import { PREFIX_URL, ASSETS_URL } from "../../contant";

function HomePage() {
  const scrollRef = useRef(null);
  const diamondRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300; // Adjust the scroll distance as needed
    }
  };
  const diamonLeft = () => {
    if (diamondRef.current) {
      diamondRef.current.scrollLeft -= 300; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300; // Adjust the scroll distance as needed
    }
  };

  const diamondRight = () => {
    if (diamondRef.current) {
      diamondRef.current.scrollLeft += 300; // Adjust the scroll distance as needed
    }
  };

  return (
    <div>
      <div className="introduction">
        <div className="intro-text">
          <span>
            "Explore "Eternal Elegance Jewels in Garib Nawaz Jewellers and
            Diamonds," Our collection boasts meticulously crafted gold and
            diamond pieces, each a masterpiece showcasing sophistication.
            Expertly handpicked diamonds and customizable options ensure a
            unique and brilliant selection for every taste. Immerse yourself in
            a world of enduring allure, where each creation at "Garib Nawaz
            Jewellers and Diamonds" tells a story of opulence and
            individuality."
          </span>
        </div>
        <div className="into-img">
          {/* <img src={`${ASSETS_URL}karishma.jpg`} alt="makka" /> */}
          <img src={`${PREFIX_URL}dad-photo-removebg-preview.png`} alt="makka" />
        </div>
      </div>
      <div className="gold-ornaments">
        <div className="quote-gold-orn">
          <span>Diamond Ornaments</span>
          <span>
            "Girls, much like DIAMONDS, are unique and valuable in their own
            way, each reflecting a distinct brilliance."
          </span>
        </div>
        <div className="gold-inner-items">
          <div className="left-ar" onClick={scrollLeft}>
            <img src={`${PREFIX_URL}left-arrow.png`} alt="left-arrow" />
          </div>
          <div className="gold-items" ref={scrollRef}>
            <div className="gold-items-img">
              <img src={`${PREFIX_URL}chokar-1.jpg`} alt="makka" />
            </div>
            <div className="gold-items-img">
              <img src={`${PREFIX_URL}chokar-2.jpg`} alt="makka" />
            </div>
            <div className="gold-items-img">
              <img src={`${PREFIX_URL}set-1.jpg`} alt="makka" />
            </div>
            <div className="gold-items-img">
              <img src={`${PREFIX_URL}chokar-3.jpg`} alt="makka" />
            </div>
            <div className="gold-items-img">
              <img src={`${PREFIX_URL}set-2.jpg`} alt="makka" />
            </div>
            <div className="gold-items-img">
              <img src={`${PREFIX_URL}set-3.jpg`} alt="makka" />
            </div>
          </div>
          <div className="right-ar" onClick={scrollRight}>
            <img src={`${PREFIX_URL}left-arrow.png`} alt="right-arrow" />
          </div>
        </div>
      </div>
      <div className="gold-ornaments">
        <div className="quote-gold-orn">
          <span>Gold Ornaments</span>
          <span>
            "Water is best, but GOLD shines like fire blazing in the night,
            supreme of lordly wealth."
          </span>
        </div>
        <div className="gold-inner-items">
          <div className="left-ar" onClick={diamonLeft}>
            {" "}
            <img src={`${PREFIX_URL}left-arrow.png`} alt="left-arrow" />
          </div>
          <div className="gold-items" ref={diamondRef}>
            <div className="gold-items-img">
              <img
                src={`${PREFIX_URL}frontPageGoldChokarTwo.jpg`}
                alt="makka"
              />
            </div>
            <div className="gold-items-img">
              <img src={`${PREFIX_URL}goldChokarFive.jpg`} alt="makka" />
            </div>
            <div className="gold-items-img">
              {/* <img src={`${PREFIX_URL}frontPageGoldChokarFour.jpg`} alt="makka" /> */}
              <img src={`${PREFIX_URL}goldChokarTwo.jpg`} alt="chokar" />
            </div>
            <div className="gold-items-img">
              {/* <img src={`${PREFIX_URL}frontPageGoldChokarOne.jpg`} alt="makka" /> */}
              <img
                src={`${PREFIX_URL}goldcompleteBridalSetTwo.jpg`}
                alt="bridal"
              />
            </div>
            <div className="gold-items-img">
              <img
                src={`${PREFIX_URL}frontPageGoldChokarSix.jpg`}
                alt="makka"
              />
            </div>
            <div className="gold-items-img">
              <img
                src={`${PREFIX_URL}frontPageGoldChokarFive.jpg`}
                alt="makka"
              />
            </div>
          </div>
          <div className="right-ar" onClick={diamondRight}>
            {" "}
            <img src={`${PREFIX_URL}left-arrow.png`} alt="left-arrow" />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default HomePage;
