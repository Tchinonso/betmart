import React from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
import "./styles/betDisplay.css";
import {  useState } from "react";

export default function BetDisplay() {


  // const location = useLocation();
  // const { from } = location.state;

  const [ setCart] = useState("");

  function cart(odds, match_id, event_home_team, event_away_team, win) {
    let slip = { odds, match_id, event_home_team, event_away_team, win };

    setCart(slip);

    // if(localStorage.getItem("cart") !== undefined){
    //   JSON.parse(localStorage.getItem("cart"));
    // }
    //     setCart(current => [...current, slip ]);
    //     console.log(Cart)

    //     localStorage.setItem("cart",JSON.stringify(Cart));
  }


  return (
    <div className="betDisplay">
 
        <div className="betDisplay-container">
          <div className="event-time">
            <p>23'</p>
          </div>

          <div className="team-details">
            <div className="team-details-container">
              <div className="home-team">
                {/* <div className="team-image">
                  <img src={fixture.home_team_logo} alt="" />
                </div> */}
                <div className="team-name">
                  <p>Arsenal</p>
                </div>
              </div>

              <div className="scores">
                <div className="scores-contents">
                  <p>2-3</p>
                </div>
              </div>

              <div className="home-team">
                {/* <div className="team-image">
                  <img src={fixture.away_team_logo} alt="" />
                </div> */}
                <div className="team-name">
                  <p>Chelsea</p>
                </div>
              </div>
            </div>
          </div>

          <div className="master-odd-container">
            <div className="odds-container">
              <div className="odds-content">
                <div className="odd" onClick={() => cart("Home win")}>
                  <p>1</p>
                  <p>2.43</p>
                </div>
                <div
                  className="odd"
                  onClick={() => cart("Draw")}>
                  <p>x</p>
                  <p>4.32</p>
                </div>
                <div className="odd" onClick={() => cart("Away win" ) }>
                  <p>2</p>
                  <p>1</p>
                </div>
              </div>
            </div>
          </div>
          <div className="master-odd-container">
            <div className="odds-container">
              <div className="odds-content">
                <div className="odd">
                  <p>1x</p>
                  <p>1</p>
                </div>
                <div className="odd">
                  <p>12</p>
                  <p>3.2</p>
                </div>
                <div className="odd">
                  <p>x2</p>
                  <p> 1.4 </p>
                </div>
              </div>
            </div>
          </div>

          {/* Over 0.5 */}
          <div className="master-odd-container">
            <div className="odds-container">
              <div className="odds-content">
                <div className="odd">
                  <p>over 0.5</p>
                  <p>5.1</p>
                </div>
                <div className="odd">
                  <p>under 0.5</p>
                  <p>4.3</p>
                </div>
              </div>
            </div>
          </div>

          {/* Over 1.5 */}
          <div className="master-odd-container">
            <div className="odds-container">
              <div className="odds-content">
                <div className="odd">
                  <p>over 1.5</p>
                  <p> 4.43 </p>
                </div>
                <div className="odd">
                  <p>under 1.5</p>
                  <p> 1.54 </p>
                </div>
              </div>
            </div>
          </div>

          {/* Over 2 */}
          <div className="master-odd-container">
            <div className="odds-container">
              <div className="odds-content">
                <div className="odd">
                  <p>over 2.5</p>
                  <p>6.32</p>
                </div>
                <div className="odd">
                  <p>under 2.5</p>
                  <p>3.6</p>
                </div>
              </div>
            </div>
          </div>

          {/* Over  3 */}
          <div className="master-odd-container">
            <div className="odds-container">
              <div className="odds-content">
                <div className="odd">
                  <p>over 3.5</p>
                  <p> 6.43 </p>
                </div>
                <div className="odd">
                  <p>under 3.5</p>
                  <p> 6.86 </p>
                </div>
              </div>
            </div>
          </div>

          {/* Over 4 and 5 */}
          <div className="master-odd-container">
            <div className="odds-container">
              <div className="odds-content">
                <div className="odd">
                  <p>over 4.5</p>
                  {/* <p>{odds["o+4.5"]}</p> */}
                  <p>2.6</p>
                </div>
                <div className="odd">
                  <p>under 4.5</p>
                  <p>9.0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Over 4 and 5 */}
          <div className="master-odd-container">
            <div className="odds-container">
              <div className="odds-content">
                <div className="odd">
                  <p>over 5.5</p>
                  <p>2.88 </p>
                </div>
                <div className="odd">
                  <p>under 5.5</p>
                  <p> 5.65 </p>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
}
