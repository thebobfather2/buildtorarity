import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./img/poweredwhite.png";
import MELogo from "./img/MELogo.png";
import DiscordLogo from "./img/Discord.png";
import projectlogo from "../images/mintfox.png";
import "./DesktopNav.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnterTools = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeaveTools = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onMouseEnterUtils = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeaveUtils = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };
  const onMouseEnterPartners = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
    }
  };

  const onMouseLeavePartners = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(false);
    }
  };

  return (
    <>
      <nav className="navbar">

        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={projectlogo} className="MELogo2" />
          <i class="fab fa-firstdraft" />
        </Link>
{/* Update with URL from your collection on Magic Eden below */} 
        <a href="https://magiceden.io/creators/bobbyrabbits/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={MELogo} className="MELogo" />
          <i class="fab fa-firstdraft" />
        </a>
{/* Update with your Discord invite link below - ensure to create a link
that never expires! */}
        <a href="https://discord.gg/74zwnMnmCM" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={DiscordLogo} className="MELogo" />
          <i class="fab fa-firstdraft" />
        </a>
{/* Update with URL from your website below */} 
        <a href="https://www.bobbyrabbits.com/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={Logo} className="navLogo" />
          <i class="fab fa-firstdraft" />
        </a>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>

        </ul>
        <WalletMultiButton/>
      </nav>
    </>
  );
}

export default Navbar;
