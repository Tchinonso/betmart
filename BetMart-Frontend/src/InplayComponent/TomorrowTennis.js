import React, { useState, useEffect } from "react";
import "./styles/inplay.css";
import axios from "axios";

export default function TomorrowTennis() {
  const [isLoading, setIsLoading] = useState(false);
  const [tennisPlayer, setTennisPlayer] = useState("");

  useEffect(() => {
    const fetchTennisData = async () => {
      setIsLoading(true);

      const res = await axios.get(
        `https://betmartoffical.herokuapp.com/api/sport/tomorow-tennis`
      );
      setTennisPlayer(res.data.result);
      setIsLoading(false);
    };
    fetchTennisData();
  }, []);

  return (
    <div>
      {isLoading && <div className="isLoading"> Loading... </div>}
      {!tennisPlayer && <div className="isLoading"> No Tennis match </div>}

      <div className="inplay-content">
        <div className="liveGames">
          {tennisPlayer &&
            tennisPlayer.map((gameTen) => (
              <div className="matches" key={gameTen.event_key}>
                <div className="current">
                  <div className="live-status">
                    <span>
                      {gameTen.event_date} {gameTen.event_time}
                    </span>
                  </div>
                </div>
                <h4>
                  {gameTen.event_first_player} vs
                  <span> {gameTen.event_second_player}</span>
                </h4>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
