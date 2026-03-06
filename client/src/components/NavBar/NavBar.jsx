import "./navbar.scss";
import logo from "/logo.png";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <div className="container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="" />
          <p>HomeiT</p>
        </div>
        <div className="menu-container">
          <ul>
            <li>Home</li>
            <li>Properties</li>
            <li>Agents</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>

        <div className="user">
          <a href="#">Sign In</a> /<a href="#">Sign Up</a>
        </div>
        <div className="mobile-menuicon">
          <img
            src={open ? "/close.svg" : "/hamburger.svg"}
            alt=""
            onClick={() => toggleMenu()}
          />
        </div>
        <div
          className={open ? "menu-overlay active" : "menu-overlay"}
          onClick={() => toggleMenu()}
        ></div>
        <div className={open ? "mobile-menu active" : "mobile-menu"}>
          <ul className="mobile-menulist">
            <li>Home</li>
            <li>Properties</li>
            <li>Agents</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
