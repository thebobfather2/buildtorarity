import React from "react";
import { Link } from "react-router-dom";
import eddtitle from "../images/eddtitle.png";
import family from "../images/family.png";
import Mintfox from "../images/mintfox.png";
import nftc from "../images/nftc.png";
import Potion from "../images/potion.png";
import feed from "../images/feed.png";
import Stakefox from "../images/stakefox.png";

import "./EddFox.css";

const EddFox = () => {
  return (
    <div className="EddMainContainer">
      <div className="EddTitleContainer">
        <img
          className="eddtitle"
          src={eddtitle}
          alt="eddtitle"
          style={{ maxWidth: "90%" }}
        ></img>
      </div>

      <div className="EddBody">
        <a href="https://magiceden.io/marketplace/eddfox">
          <img
            className="Mintfox"
            src={Mintfox}
            alt="Mintfox"
          ></img>
          <h3 style={{ marginBottom: "40px", color: "white", textShadow: "2px 2px #000000"}}>Buy A Fox</h3>
        </a>

        <a href="https://staking.bobbyrabbits.com/eddfox">
          <img
            className="Stakefox"
            src={Stakefox}
            alt="Stakefox"
            style={{ marginTop: "0px"}}
          ></img>
          <h3 style={{ marginBottom: "40px", color: "white", textShadow: "2px 2px #000000"}}>
            Earn $FIELD
          </h3>
        </a>

        <Link to="/FoxMart">
          <img
            className="Stakefox"
            src={Potion}
            alt="Potion"
            style={{ marginTop: "0px"}}
          ></img>
          <h3 style={{ marginBottom: "40px", color: "white", textShadow: "2px 2px #000000"}}>FoxMart</h3>
        </Link>

        <Link to="/UpgradeFox">
          <img
            className="Stakefox"
            src={feed}
            alt="Upgrade"
            style={{ marginTop: "0px"}}
          ></img>
         <h3 style={{ marginBottom: "40px", color: "white", textShadow: "2px 2px #000000"}}>Upgrade Your Fox</h3>
        </Link>
      </div>
    </div>
  );
};

export default EddFox;