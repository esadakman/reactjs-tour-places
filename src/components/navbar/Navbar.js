import React from "react";
// import navbarStyle from "./Navbar.module.css";
import navbarStyle from "../../sass/navbar.module.scss";

const Navbar = () => {
  return (
    <div className={navbarStyle["navbar"]}>
      <nav className={navbarStyle["nav"]}>
        <ul className={navbarStyle["nav__list"]}>
          <li className={navbarStyle["nav__item"]}>
            <a href="index.html">About Us</a>
          </li>
          <li className={navbarStyle["nav__item"]}>
            <a href="index.html">For You</a>
          </li>
          <li className={navbarStyle["nav__item"]}>
            <a href="index.html">Services</a>
          </li>
          <li className={navbarStyle["nav__item"]}>
            <a href="index.html">Blog</a>
          </li>
          <li className={navbarStyle["nav__item"]}>
            <a href="index.html">Vlog</a>
          </li>
          <li className={navbarStyle["nav__item"]}>
            <a href="index.html">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
