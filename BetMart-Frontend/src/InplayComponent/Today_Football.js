import React, { useState, useEffect } from "react";
import "./styles/inplay.css";
// import { Link } from "react-router-dom";
import axios from "axios";

export default function Today_Football() {
  const [isLoading, setIsLoading] = useState(false);
  const [todaysGame, setTodaysGame] = useState("");

  useEffect(() => {
    const fetchSoccer = async () => {
      setIsLoading(true);
      await axios
        .get(`https://betmartoffical.herokuapp.com/api/sport/today-football`)
        .then((response) => {
          setTodaysGame(response.data.result);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchSoccer();
  },[]);

  return (
    <div>
      {isLoading && <div className="isLoading"> Loading... </div>}
      
      {todaysGame &&
        todaysGame.map((game) => (
          <div key={game.event_key} className="matches">
            <div className="current">
              <div className="live-status">
                <span>{game.league_name + " " + game.country_name}</span>
              </div>
              <span className="date">{game.event_date}</span>
              <span className="time">{game.event_time}</span>
            </div>

            <div className="match-info">
              <div className="match-info-container">
                <div className="home_team">
                  <div className="home_img">
                    <img src={game.home_team_logo} alt="game" />
                  </div>
                  <div className="home-text">
                    <h4>{game.event_home_team}</h4>
                  </div>
                </div>
                <div className="versus">
                  <h3>{game.event_final_result}</h3>
                </div>
                <div className="away">
                  <div className="away-img">
                    <img src={game.away_team_logo} alt="game" />
                  </div>
                  <div className="away-text">
                    <h4>{game.event_away_team}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
