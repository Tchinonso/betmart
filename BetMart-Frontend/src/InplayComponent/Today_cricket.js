import React, { useState, useEffect } from "react";
import "./styles/inplay.css";
import axios from "axios";

export default function Today_cricket() {
  const [isLoading, setIsLoading] = useState(false);
  const [cricketData, setCricketData] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchCricketData = async () => {
      await axios
        .get(`https://betmartoffical.herokuapp.com/api/sport/today-cricket`)
        .then((response) => {
          setCricketData(response.data.result);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchCricketData();
  }, []);

  return (
    <div>
      {isLoading && <div className="isLoading"> Loading... </div>}

      {cricketData &&
        cricketData.map((gameCricket) => (
          <div className="matches" key={gameCricket.event_key}>
            <div id="current" className="current">
              <div className="status">
                <span>f</span>
              </div>
              <div className="status">
                <span>B</span>
              </div>
              <div className="live-status">
                <span>
                  {gameCricket.event_time} {gameCricket.event_status_info}
                </span>
              </div>
            </div>

            <h4>
              {gameCricket.event_home_team} -{gameCricket.event_away_team}
            </h4>
          </div>
        ))}
    </div>
  );
}
