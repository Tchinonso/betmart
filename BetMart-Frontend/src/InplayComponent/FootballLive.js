import React, { useState, useEffect } from "react";
import "./styles/inplay.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function FootballLive() {
  const [liveGame, setLiveGames] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //  Live Games
  useEffect(() => {
    const fetchLiveSport = async () => {
      setIsLoading(true);
      await axios
        .get(`https://betmartoffical.herokuapp.com/api/sport/live-soccer`)
        .then((response) => {
          setLiveGames(response.data.result);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchLiveSport();
  }, []);

  return (
    <div>
      {isLoading && <div className="isLoading"> Loading... </div>}
      {!liveGame && <div className="isLoading"> No inplay football match </div>}

      {liveGame &&
        liveGame.map((live) => (
          <div className="matches" key={live.event_key}>
            <Link to="/game-display" state={{ from: live.event_key }}>
              <div className="march-contents">
                <div className="current">
                  <div className="live-status">
                    <span>{live.league_name}</span>
                  </div>

                  <div className="team_clubs-container">
                    <div className="home_team-contents">
                      <div className="image">
                        <img src={live.home_team_logo} alt="" />
                      </div>
                      <div className="club">{live.event_home_team}</div>
                    </div>
                    <div className="middle_team-contents">
                      <p> {live.event_final_result}</p>
                    </div>
                    <div className="away_team-contents">
                      <div className="image">
                        <img src={live.away_team_logo} alt="" />
                      </div>
                      <div className="club">{live.event_away_team}</div>
                    </div>
                  </div>

                  <div className="time-ma-contents">
                    <div className="active-livePlay"></div>
                    <div className="time_el">
                      <span className="time">{live.event_status}'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}
