
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./navbar.scss";

const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#memu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
      </div>
      <div className="app__navbar-login">
        <a href="" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="f">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToogleMenu(true)}
        />

        {toogleMenu === true && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToogleMenu(false)}
            />
            <ul className="app__navbar-smallscren-links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">About</a>
              </li>
              <li className="p__opensans">
                <a href="#memu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">Awards</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
