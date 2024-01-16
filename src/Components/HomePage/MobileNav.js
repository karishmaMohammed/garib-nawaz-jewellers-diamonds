import React, { useState } from "react";
import "./HomePage.css";
import { PREFIX_URL } from "../../contant";


function MobileNav({close}) {
    const [goldDropDown, setGoldDropDown] = useState(false);
  const [diamondDropDown, setDiamondDropDown] = useState(false);

  const handleGoldDropDown = () => {
    setGoldDropDown(!goldDropDown);
    setDiamondDropDown(false);
  };
  const handleDiamondDropDown = () => {
    setDiamondDropDown(!diamondDropDown);
    setGoldDropDown(false);
  };
  const handleCloseMenu = () => {
    close()
  }
  return (
    <>
    {/* <div className="mobile-top-nav"> */}
      {/* dad-shop-logo.png */}
     
      <div className="mobile-navs">
        <a className="mobile-home" href="/">Home</a>
        <div className="mobile-gold-orn" onClick={handleGoldDropDown}>
          Gold Ornaments
          <img src={`${PREFIX_URL}down-arrow.png`} alt=""  />
        </div>
        {goldDropDown && (
          <div className="mobile-drop-down-items">
            <a href="/gold-rings">Gold Rings</a>
            <div className="mobile-span-divider"></div>
            <a href="/gold-earrings">Gold Earrings</a>
            <div className="mobile-span-divider"></div>
            <a href="/gold-chains">Gold chains</a>
            <div className="mobile-span-divider"></div>
            <a href="/gold-bangles">Gold Bangles</a>
            <div className="mobile-span-divider"></div>
            <a href="/gold-long-haram">Gold Long Haram</a>
            <div className="mobile-span-divider"></div>
            <a href="/gold-antic-long-haram">Gold Antic Long Haram</a>
            <div className="mobile-span-divider"></div>
            <a href="/gold-chokars">Gold Chokars</a>
            <div className="mobile-span-divider"></div>
            <a href="/gold-bridal-set">Gold Bridal Set</a>
            <div className="mobile-span-divider"></div>
            <a href="/some-more">Special Items</a>
          </div>
        )}
        <div className="mobile-gold-orn" onClick={handleDiamondDropDown}>
          Diamond Ornaments
          <img src={`${PREFIX_URL}down-arrow.png`} alt=""  />
        </div>
        {diamondDropDown && (
          <div className="mobile-diamond-drop-down-items">
            <a href="/diamond-rings">Diamond Rings</a>
            <div className="mobile-span-divider"></div>
            <a href="/diamond-earrings">Diamond Earrings</a>
            <div className="mobile-span-divider"></div>
            <a href="/diamond-chains">Diamond chains</a>
            <div className="mobile-span-divider"></div>
            <a href="/diamond-bangles">Diamond Bangles</a>
            <div className="mobile-span-divider"></div>
            <a href="/diamond-long-haram">Diamond Long Haram</a>
            <div className="mobile-span-divider"></div>
            <a href="/diamond-chokar">Diamond Chokars</a>
            <div className="mobile-span-divider"></div>
            <a href="/diamond-simple-chokar">Diamond Simple Chokars</a>
            <div className="mobile-span-divider"></div>
            <a href="/diamond-bridal-set">Diamond Bridal Set</a>
            <div className="mobile-span-divider"></div>
            <a href="/some-more">Special Items</a>
          </div>
        )}
        <a className="mobile-home" href="#contact" onClick={handleCloseMenu}>Contact Us</a>
      </div>
    {/* </div> */}
  </>
  )
}

export default MobileNav
