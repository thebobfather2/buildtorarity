import { Link } from "react-router-dom";
import ProjectLogo from "../images/ProjectLogo.png";
import marketplaceButton from "../images/MarketplaceButton.png";
import upgradeButton from "../images/UpgradeButton.png";
import stakingButton from "../images/StakingButton.png";

import "./Home.css";

const Home = () => {
  return (
    <div className="EddMainContainer">
      <div className="EddTitleContainer">
        <h1 className="MainTitle">Edd Fox</h1>
      </div>

      <div className="EddBody">
{/* Update with URL from Magic Eden below */} 
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
            className="buttonImg"
            src={stakingButton}
            alt="Staking Button"
            style={{ marginTop: "0px"}}
          ></img>
          <h3 style={{ marginBottom: "40px", color: "white", textShadow: "2px 2px #000000"}}>
            Earn $FIELD
          </h3>
        </a>

        <Link to="/TraitMarketplace">
          <img
            className="buttonImg"
            src={marketplaceButton}
            alt="Marketplace Button"
            style={{ marginTop: "0px"}}
          ></img>
          <h3 style={{ marginBottom: "40px", color: "white", textShadow: "2px 2px #000000"}}>FoxMart</h3>
        </Link>

        <Link to="/Upgrade">
          <img
            className="buttonImg"
            src={upgradeButton}
            alt="Upgrade Button"
            style={{ marginTop: "0px"}}
          ></img>
         <h3 style={{ marginBottom: "40px", color: "white", textShadow: "2px 2px #000000"}}>Upgrade Your Fox</h3>
        </Link>
      </div>
    </div>
  );
};

export default Home;