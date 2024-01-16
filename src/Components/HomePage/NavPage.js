import React, { useState } from "react";
import "./HomePage.css";
import { PREFIX_URL, ASSETS_URL } from "../../contant";
import MobileNav from "./MobileNav";

function NavPage() {
  const [goldDropDown, setGoldDropDown] = useState(false);
  const [diamondDropDown, setDiamondDropDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleGoldDropDown = () => {
    setGoldDropDown(!goldDropDown);
    setDiamondDropDown(false);
  };
  const handleDiamondDropDown = () => {
    setDiamondDropDown(!diamondDropDown);
    setGoldDropDown(false);
  };
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <div className="top-nav">
        <div className="shop-name">
          <div className="our-collection">
            <img
              className="jwellery-logo"
              src={`${PREFIX_URL}new-our-collection-logo.png`}
              onClick={handleMenuOpen}
              alt=""
            />
            <span>Collections</span>
          </div>

          {/* <img className="jwellery-logo" src={`${ASSETS_URL}karishma.jpg`} onClick={handleMenuOpen} alt="logo"/> */}
          {/* <span>Karishma Jewellers</span> */}
          <div className="shop-name-phone-numbers">
            <span>Garib Nawaz Jewellers and Diamonds</span>
            <span>Ph No: +91 9848424401</span>
          </div>
        </div>

        <div className="navs">
          <a href="/">Home</a>
          <a className="gold-orn" onClick={handleGoldDropDown}>
            Gold Ornaments
            <img
              src={`${PREFIX_URL}down-arrow.png`}
              alt=""
              
            />
          </a>
          {goldDropDown && (
            <div className="drop-down-items">
              <a href="/gold-rings">Gold Rings</a>
              <div className="span-divider"></div>
              <a href="/gold-earrings">Gold Earrings</a>
              <div className="span-divider"></div>
              <a href="/gold-chains">Gold chains</a>
              <div className="span-divider"></div>
              <a href="/gold-bangles">Gold Bangles</a>
              <div className="span-divider"></div>
              <a href="/gold-long-haram">Gold Long Haram</a>
              <div className="span-divider"></div>
              <a href="/gold-antic-long-haram">Gold Antic Long Haram</a>
              <div className="span-divider"></div>
              <a href="/gold-chokars">Gold Chokars</a>
              <div className="span-divider"></div>
              <a href="/gold-bridal-set">Gold Bridal Set</a>
              <div className="span-divider"></div>
              <a href="/some-more">Special Items</a>
            </div>
          )}
          <a className="gold-orn" onClick={handleDiamondDropDown}>
            Diamond Ornaments
            <img
              src={`${PREFIX_URL}down-arrow.png`}
              alt=""
              
            />
          </a>
          {diamondDropDown && (
            <div className="diamond-drop-down-items">
              <a href="/diamond-rings">Diamond Rings</a>
              <div className="span-divider"></div>
              <a href="/diamond-earrings">Diamond Earrings</a>
              <div className="span-divider"></div>
              <a href="/diamond-chains">Diamond chains</a>
              <div className="span-divider"></div>
              <a href="/diamond-bangles">Diamond Bangles</a>
              <div className="span-divider"></div>
              <a href="/diamond-long-haram">Diamond Long Haram</a>
              <div className="span-divider"></div>
              <a href="/diamond-chokar">Diamond Chokars</a>
              <div className="span-divider"></div>
              <a href="/diamond-simple-chokar">Diamond Simple Chokars</a>
              <div className="span-divider"></div>
              <a href="/diamond-bridal-set">Diamond Bridal Set</a>
              <div className="span-divider"></div>
              <a href="/some-more">Special Items</a>
            </div>
          )}
          <a href="#contact">Contact Us</a>
        </div>
        {menuOpen && <MobileNav close={handleCloseMenu} />}
      </div>
    </>
  );
}

export default NavPage;
