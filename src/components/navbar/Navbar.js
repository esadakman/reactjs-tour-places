import React from "react";
import navbarStyle from "../../sass/navbar.module.scss";

const Navbar = () => {
  return (
    <div className={navbarStyle["navbar"]}>
      <nav className={navbarStyle["nav"]}>
        <ul className={navbarStyle["nav__list"]}>
          <li className={navbarStyle["nav__item"]}>
            <a href="#aboutUs">About Us</a>
          </li>
          <li className={navbarStyle["nav__item"]}>
            <a href="#foryou">For You</a>
          </li>
          <li className={navbarStyle["nav__item"]}>
            <a href="#services">Services</a>
          </li>
          <li className={navbarStyle["nav__item"]}>
            <a href="#blog">Blog</a>
          </li>
          <li className={navbarStyle["nav__item"]}>
            <a href="#vlog">Vlog</a>
          </li>
          <li className={navbarStyle["nav__item"]}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
