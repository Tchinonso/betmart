import React, { useState } from "react";
import "./styles/live.css";
import openSport from "../images/greatericon.svg";

export default function Live() {
  const [show, setShow] = useState(false);
  const [foot, setFoot] = useState(false);
  const [tennis, setTennis] = useState(false);

  return (
    <div className="leftSport">
      <div className="leftSport-cover">
        <div className="topsport">
          <h3>Sport</h3>
        </div>
        <div onClick={() => setShow(!show)} className="SportGames">
          <div id="cricket" className="sport">
            <h3>Cricket</h3>
          </div>
          <div className="sportArrow">
            <img className="rotate" src={openSport} alt="" />
          </div>
        </div>

        <div className="live-scroll">
          <div onClick={() => setFoot(!foot)} className="SportGames">
              <div id="sport-notify" className="sport">
                <h3>Football</h3>
              </div>
            <div className="sportArrow">
              <img src={openSport} alt="" />
            </div>
          </div>
        </div>

        <div onClick={() => setTennis(!tennis)} className="SportGames">
          <div id="tennis" className="sport">
            <h3>Tennis</h3>
          </div>
          <div className="sportArrow">
            <img src={openSport} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
