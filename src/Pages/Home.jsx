import { Link } from "react-router-dom";
import ProjectLogo from "../images/ProjectLogo.png";
import Potion from "../images/potion.png";
import upgrade from "../images/upgradeButton.png";
import Stakefox from "../images/stakefox.png";

import "./Home.css";

const Home = () => {
  return (
    <div className="EddMainContainer">
      <div className="EddTitleContainer">
        <h1 className="MainTitle">Edd Fox</h1>
      </div>

      <div className="EddBody">

        <a href="https://magiceden.io/marketplace/eddfox">
          <img
            className="ProjectLogo"
            src={ProjectLogo}
            alt="Project Logo"
          ></img>
          <h3 style={{ marginBottom: "40px", color: "white", textShadow: "2px 2px #000000"}}>Buy A Fox</h3>
        </a>

{/* Update with URL from Cardinal Labs Staking below */} 
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
            src={upgrade}
            alt="Upgrade"
            style={{ marginTop: "0px"}}
          ></img>
         <h3 style={{ marginBottom: "40px", color: "white", textShadow: "2px 2px #000000"}}>Upgrade Your Fox</h3>
        </Link>
      </div>
    </div>
  );
};

export default Home;