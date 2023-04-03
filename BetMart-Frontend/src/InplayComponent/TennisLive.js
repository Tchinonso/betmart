import React, { useState, useEffect } from "react";
import "./styles/inplay.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function TennisLive() {
  const [isLoading, setIsLoading] = useState(false);
  const [Tennis, setTennis] = useState("");

  // //  Live Games
  useEffect(() => {
    const fetchLiveSport = async () => {
      setIsLoading(true);
      await axios
        .get(`https://betmartoffical.herokuapp.com/api/sport/live-tennis`)
        .then((response) => {
          setTennis(response.data.result);
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
        { isLoading &&  <div className="isLoading"> Loading... </div>}
      {Tennis &&
        Tennis.map((live) => (
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
                      <div className="club">{live.event_first_player}</div>
                    </div>
                    <div className="middle_team-contents">
                      <p> {live.event_final_result}</p>
                      <h3 className="current">{live.event_game_result}'</h3>
                    </div>
                    <div className="away_team-contents">
                      <div className="image">
                        <img src={live.away_team_logo} alt="" />
                      </div>
                      <div className="club">{live.event_second_player}</div>
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
