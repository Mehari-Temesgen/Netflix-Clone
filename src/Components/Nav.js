import React, { useEffect, useState } from "react";
import "./Nav.css";
import netflixLogo from "../image/Netflix.png";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillBell } from "react-icons/ai";
import { AiFillDownCircle } from "react-icons/ai";
import { AiFillAccountBook } from "react-icons/ai";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    //   return () => {
    //     window.removeEventListener("scroll");
    //   };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="header__container">
        <div className="header__left">
          <ul>
            <li>
              <img className="nav__logo" src={netflixLogo} alt="Netflix logo" />
            </li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse My Language</li>
          </ul>
        </div>
        <div className="header__right">
          <ul>
            <li>
              <AiOutlineSearch />
            </li>
            <li>
              <AiFillBell />
            </li>
            <li>
              <AiFillAccountBook />
            </li>
            <li>
              <AiFillDownCircle />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
