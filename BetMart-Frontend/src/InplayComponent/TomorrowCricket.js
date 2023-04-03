import React, { useState, useEffect } from "react";
import "./styles/inplay.css";
// import { Link } from "react-router-dom";
import axios from "axios";

export default function TomorrowCricket() {
  const [cricketData, setCricketData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCricketData = async () => {
      setIsLoading(true);
      await axios
        .get(`https://betmartoffical.herokuapp.com/api/sport/tomorow-cricket`)
        .then((response) => {
          setCricketData(response.data.result);
          setIsLoading(false);
        });
    };
    fetchCricketData();
  }, []);
  return (
    <div>
      {isLoading && <div className="isLoading"> Loading... </div>}
      {!cricketData && <div className="isLoading"> No cricket match... </div>}

      <div className="inplay-content">
        <div className="liveGames">
          {cricketData &&
            cricketData.map((gameCricket) => (
              <div className="matches" key={gameCricket.event_key}>
                <div className="current">
                  <div className="status">
                    <span>f</span>
                  </div>
                  <div className="status">
                    <span>B</span>
                  </div>
                  <div className="live-status">
                    <span>
                      {gameCricket.event_time}
                      {gameCricket.event_status_info}
                    </span>
                  </div>
                </div>

                <h4>
                  {gameCricket.event_home_team}
                  {gameCricket.event_away_team}
                </h4>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
