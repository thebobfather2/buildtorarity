import { Button } from "@material-ui/core";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import br from "./img/poweredwhite.png";
import Logo from "./img/poweredwhite.png";
import MELogo from "./img/MELogo.png";
import DiscordLogo from "./img/Discord.png";
import "./MobileNav.css";

const Navbar = () => {
  let walletAddress = "";
  const wallet = useAnchorWallet();
  walletAddress = wallet?.publicKey.toString();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {toggleMenu || screenWidth > 755 ? (
        <>
          <Link to="/">
            <img className="navlogo" src={br} alt="logo" />
          </Link>
          <ul className="list"close  style={{marginTop: "30px"}}>
        <br></br>
        <br></br>
{/* Update with URL from your collection on Magic Eden below */} 
        <a href="https://magiceden.io/creators/bobbyrabbits/" style={{marginTop: "-10px"}} className="navbar-logo2" onClick={toggleNav}>
          <img src={MELogo} className="MELogo" />
          <i class="fab fa-firstdraft" />
        </a>
{/* Update with your Discord invite link below - ensure to create a link
that never expires! */}
        <a href="https://discord.gg/PfGQnKZqNa" className="navbar-logo2" onClick={toggleNav}>
          <img src={DiscordLogo} className="MELogo" />
          <i class="fab fa-firstdraft" />
        </a>
        <br></br>
{/* Update with URL from your website below */} 
        <a href="https://www.bobbyrabbits.com/" className="navbar-logo2" onClick={toggleNav}>
          <img src={Logo} className="navLogo2" />
          <i class="fab fa-firstdraft" />
        </a>
        <br></br>

            <WalletModalProvider>
              <li>
                <WalletMultiButton
                  style={{ backgroundColor: "black !important" }}
                />
              </li>
            </WalletModalProvider>
          </ul>
          <Button className="close" onClick={toggleNav} style={{marginTop: "20px"}}>
            Close
          </Button>
        </>
      ) : (
        <nav className="nav">
          
        <Link to="/" className="navbar-logo">
          <img src={Logo} className="navLogo"/>
        </Link>

        <button onClick={toggleNav} className="btn" style={{ marginTop: "22px", color: "white" }}>
          Menu
        </button>
        </nav>
      )}
    </nav>
  );
};

export default Navbar;
