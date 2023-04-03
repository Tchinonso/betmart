import React, { useState, useEffect } from "react";
import "./styles/inplay.css";
import axios from "axios";

export default function Today_Tennis() {
  const [tennisPlayer, setTennisPlayer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTennisData = async () => {
      setIsLoading(true);
      await axios
        .get(`https://betmartoffical.herokuapp.com/api/sport/today-tennis`)
        .then((response) => {
          setTennisPlayer(response.data.result);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchTennisData();
  }, []);

  return (
    <div>
      <div>{isLoading && <div className="isLoading"> Loading... </div>}</div>

      {tennisPlayer &&
        tennisPlayer.map((gameTen) => (
          <div className="matches" key={gameTen.event_key}>
            <div className="current">
              <h3>{gameTen.league_name}</h3>
              <div className="live-status">
                <span>
                  {gameTen.event_date} {gameTen.event_time}
                </span>
              </div>
            </div>
            <h4>
              {gameTen.event_first_player} -
              <span> {gameTen.event_second_player}</span>
            </h4>
          </div>
        ))}
    </div>
  );
}
