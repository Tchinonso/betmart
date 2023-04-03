import React, { useState, useEffect } from "react";
import "./styles/inplay.css";
import axios from "axios";

export default function TomorrowFootball() {
  const [tomorrowGame, setTomorrowGame] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    const fetchSoccer = async () => {
    setIsLoading(true);
    await axios.get(`https://betmartoffical.herokuapp.com/api/sport/tomorow-fooball`)
      .then((res) => {
        setTomorrowGame(res.data.result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error");
      });
    }
      fetchSoccer();
  },[]);

  return (
    <div>
      {isLoading && <div className="isLoading"> Loading... </div>}
      
      {!tomorrowGame && <div className="isLoading"> Loading... </div>}

      <div className="inplay-content">
        <div className="liveGames">
          {tomorrowGame &&
            tomorrowGame.map((tomorrow) => (
              <div key={tomorrow.event_key} className="matches">
                <div className="current">
                  <div className="live-status">
                    <span>
                      {tomorrow.league_name + " " + tomorrow.country_name}
                    </span>
                  </div>
                  <span className="date">{tomorrow.event_date}</span>
                  <span className="time">{tomorrow.event_time}</span>
                </div>

                <div className="match-info">
                  <div className="match-info-container">
                    <div className="home_team">
                      <div className="home_img">
                        <img src={tomorrow.home_team_logo} alt="" />
                      </div>
                      <div className="home-text">
                        <h4>{tomorrow.event_home_team}</h4>
                      </div>
                    </div>
                    <div className="versus">
                      <h3>{tomorrow.event_final_result}</h3>
                    </div>
                    <div className="away">
                      <div className="away-img">
                        <img src={tomorrow.away_team_logo} alt="" />
                      </div>
                      <div className="away-text">
                        <h4>{tomorrow.event_away_team}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
