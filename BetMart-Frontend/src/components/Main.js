import React from "react";
import { NavLink } from "react-router-dom";
import sport from "./images/sport.svg";
import "./styles/home.css";
import play from "./images/play.svg";
import roulette from "./images/roulette.svg";
import dargonTiger from "./images/dragonTiger.svg";
import blackjackA from "./images/blackjack A.svg";
import bullfight from "./images/bullfight.svg";
import baccarate from "./images/baccarate.svg";
import classicBacarate from "./images/classicBacarate.svg";
import dragonTiger1 from "./images/dragontiger1.svg";
import siobo from "./images/siobo.svg";
import threeCard from "./images/three card.svg";
import lobby from "./images/lobby.svg";
import dragonDSC from "./images/dragon tigerDSC.svg";
import redblue from "./images/redblue.svg";
import dragon3 from "./images/dragontiger3.svg";
import roulette1 from "./images/roulette1.svg";
import sicbo from "./images/sicbo.svg";
import aviator from "./images/aviator.svg";
import bull from "./images/bull.svg";
import baccaratBlockchain from "./images/baccaratBlockchain.svg";
import Footer from "./Footer";


export default function Home() {
  return (
    <div className="homepage-cover">
      <div className="homepage">
        <div className="games">
          <NavLink to="/sport">
            <img src={sport} alt="games" />
            <div className="contents">
              <div className="content-name">
                <h4>Sport</h4>
              </div>
              <div className="content-img">
                <img src={play} alt="Profile logo" />
              </div>
            </div>
            <div className="hover">
              <h1>Play Now</h1>
            </div>
          </NavLink>
        </div>

        <div className="games">
          <NavLink to="/roulette">
            <img src={roulette} alt="games" />
            <div className="contents">
              <div className="content-name">
                <h4>Roulette</h4>
              </div>
              <div className="content-img">
                <img src={play} alt="Profile logo" />
              </div>
            </div>
            <div className="hover">
              <h1>Play Now</h1>
            </div>
          </NavLink>
        </div>

        <div className="games">
          <NavLink to="/blackjack">
            <img src={blackjackA} alt="games" />
            <div className="contents">
              <div className="content-name">
                <h4>blackjack A</h4>
              </div>
              <div className="content-img">
                <img src={play} alt="Profile logo" />
              </div>
            </div>
            <div className="hover">
              <h1>Play Now</h1>
            </div>
          </NavLink>
        </div>

        <div className="games">
          <NavLink to="/dragon tiger">
            <img src={dargonTiger} alt="games" />
            <div className="contents">
              <div className="content-name">
                <h4>DragonTiger</h4>
              </div>
              <div className="content-img">
                <img src={play} alt="Profile logo" />
              </div>
            </div>
            <div className="hover">
              <h1>Play Now</h1>
            </div>
          </NavLink>
        </div>

        <div className="games">
          <NavLink to="/classicBacarate">
            <img src={classicBacarate} alt="games" />
            <div className="contents">
              <div className="content-name">
                <h4>Classic Baccarate</h4>
              </div>
              <div className="content-img">
                <img src={play} alt="Profile logo" />
              </div>
            </div>
            <div className="hover">
              <h1>Play Now</h1>
            </div>
          </NavLink>
        </div>

        <div className="games">
          <NavLink to="/bullfight">
            <img src={bullfight} alt="games" />
            <div className="contents">
              <div className="content-name">
                <h4>Bull Fight</h4>
              </div>
              <div className="content-img">
                <img src={play} alt="Profile logo" />
              </div>
            </div>
            <div className="hover">
              <h1>Play Now</h1>
            </div>
          </NavLink>
        </div>

        <div className="games">
          <NavLink to="/baccrate">
            <img src={baccarate} alt="games" />
            <div className="contents">
              <div className="content-name">
                <h4>Baccarate</h4>
              </div>
              <div className="content-img">
                <img src={play} alt="Profile logo" />
              </div>
            </div>
            <div className="hover">
              <h1>Play Now</h1>
            </div>
          </NavLink>
        </div>

        <div className="games">
          <NavLink to="/dragon tiger">
            <img src={dragonTiger1} alt="games" />
            <div className="contents">
              <div className="content-name">
                <h4>Dragon Tiger</h4>
              </div>
              <div className="content-img">
                <img src={play} alt="Profile logo" />
              </div>
            </div>
            <div className="hover">
              <h1>Play Now</h1>
            </div>
          </NavLink>
        </div>

        <div className="games">
          <NavLink to="/dragon tiger">
            <img src={siobo} alt="games" />
            <div className="contents">
              <div className="content-name">
                <h4>Super Sio Bo</h4>
              </div>
              <div className="content-img">
                <img src={play} alt="Profile logo" />
              </div>
            </div>
            <div className="hover">
              <h1>Play Now</h1>
            </div>
          </NavLink>
        </div>

        <div className="games">
          <NavLink to="/three card">
            <img src={threeCard} alt="games" />
            <div className="contents">
              <div className="content-name">
                <h4>Three Cards</h4>
              </div>
              <div className="content-img">
                <img src={play} alt="Profile logo" />
              </div>
            </div>
            <div className="hover">
              <h1>Play Now</h1>
            </div>
          </NavLink>
        </div>

        <div className="games">
          <NavLink to="/lobby">
            <img src={lobby} alt="games" />
            <div className="contents">
              <div className="content-name">
                <h4>Lobby</h4>
              </div>
              <div className="content-img">
                <img src={play} alt="Profile logo" />
              </div>
            </div>
            <div className="hover">
              <h1>Play Now</h1>
            </div>
          </NavLink>
        </div>

        <div className="games">
          <NavLink to="/dragonDSC">
            <img src={dragonDSC} alt="games" />
            <div className="contents">
              <div className="content-name">
                <h4>Dragon Tiger</h4>
              </div>
              <div className="content-img">
                <img src={play} alt="Profile logo" />
              </div>
            </div>
            <div className="hover">
              <h1>Play Now</h1>
            </div>
          </NavLink>
        </div>

        <div className="games">
          <NavLink to="/redblue">
            <img src={redblue} alt="games" />
            <div className="contents">
              <div className="content-name">
                <h4>Red Blue Duel</h4>
              </div>
              <div className="content-img">
                <img src={play} alt="Profile logo" />
              </div>
            </div>
            <div className="hover">
              <h1>Play Now</h1>
            </div>
          </NavLink>
        </div>

        <div className="games">
          <NavLink to="/roulette">
            <img src={dragon3} alt="games" />
            <div className="contents">
              <div className="content-name">
                <h4>Dragon Tiger</h4>
              </div>
              <div className="content-img">
                <img src={play} alt="Profile logo" />
              </div>
            </div>
            <div className="hover">
              <h1>Play Now</h1>
            </div>
          </NavLink>
        </div>

        <div className="games">
          <NavLink to="/roulette">
            <img src={roulette1} alt="games" />
            <div className="contents">
              <div className="content-name">
                <h4>Roulette</h4>
              </div>
              <div className="content-img">
                <img src={play} alt="Profile logo" />
              </div>
            </div>
            <div className="hover">
              <h1>Play Now</h1>
            </div>
          </NavLink>
        </div>

        <div className="games">
          <NavLink to="/sicbo">
            <img src={sicbo} alt="games" />
            <div className="contents">
              <div className="content-name">
                <h4>Sic Bo</h4>
              </div>
              <div className="content-img">
                <img src={play} alt="Profile logo" />
              </div>
            </div>
            <div className="hover">
              <h1>Play Now</h1>
            </div>
          </NavLink>
        </div>

        <div className="games">
          <NavLink to="/dragonDSC">
            <img src={baccaratBlockchain} alt="games" />
            <div className="contents">
              <div className="content-name">
                <h4>Blockchain Baccarate</h4>
              </div>
              <div className="content-img">
                <img src={play} alt="Profile logo" />
              </div>
            </div>
            <div className="hover">
              <h1>Play Now</h1>
            </div>
          </NavLink>
        </div>

        <div className="games">
          <NavLink to="/bull">
            <img src={bull} alt="games" />
            <div className="contents">
              <div className="content-name">
                <h4>Bull</h4>
              </div>
              <div className="content-img">
                <img src={play} alt="Profile logo" />
              </div>
            </div>
            <div className="hover">
              <h1>Play Now</h1>
            </div>
          </NavLink>
        </div>

        <div className="games">
          <NavLink to="/avitor">
            <img src={aviator} alt="games" />
            <div className="contents">
              <div className="content-name">
                <h4>Aviator</h4>
              </div>
              <div className="content-img">
                <img src={play} alt="Profile logo" />
              </div>
            </div>
            <div className="hover">
              <h1>Play Now</h1>
            </div>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
}
