import React from "react";
import "./styles/inplay.css";
import { useState } from "react";
import TomorrowCricket from "./TomorrowCricket";
import TomorrowFootball from "./TomorrowFootball";
import TomorrowTennis from "./TomorrowTennis";

export default function Tomorrow() {
  const [isActive, setIsActive] = useState("route-btns");
  const [isActiveF, setIsActiveF] = useState("route-btn");
  const [isActiveT, setIsActiveT] = useState("route-btn");

  const [data, setData] = useState(<TomorrowFootball />);

  const HandleRoute = (e) => {
    if (e === 1) {
      setData(<TomorrowFootball />);
      setIsActive("route-btns");
      setIsActiveF("route-btn");
      setIsActiveT("route-btn");
    } else if (e === 2) {
      setData(<TomorrowCricket />);
      setIsActive("route-btn");
      setIsActiveF("route-btns");
      setIsActiveT("route-btn");
    } else {
      setData(<TomorrowTennis />);
      setIsActive("route-btn");
      setIsActiveF("route-btn");
      setIsActiveT("route-btns");
    }
  };

  return (
    <div className="inplay-cover">
      <div className="inplay">
        <div className="inplayPage">
          <div className="inplay-content">
            <div className="liveGames">
              <div className="header">
                <div className="contents" onClick={() => HandleRoute(1)}>
                  <h3 className={isActive}>Football</h3>
                </div>
                <div className="contents" onClick={() => HandleRoute(2)}>
                  <h3 className={isActiveF}>Cricket</h3>
                </div>
                <div className="contents" onClick={() => HandleRoute(3)}>
                  <h3 className={isActiveT}>Tennis</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="dispay-data">
            <div className="dispay-data-container">{data}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
