import React, { useState, useEffect } from "react";
import "./styles/multi.css";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Multi() {
  const [multi, setMulti] = useState("");
  const [multiOdd, setMultiOdd] = useState("");
  const { user } = useAuthContext();

  useEffect(() => {
    const handleMulti = async () => {
      await axios
        .get(`https://betmartoffical.herokuapp.com/api/bet/get-multimarket`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.Token}`,
          },
        })
        .then((response) => {
          setMulti(response.data.fixture[0]);
          setMultiOdd(response.data.odd);
          console.log(response.data.odd);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (user) {
      handleMulti();
    }
  }, [user]);

  return (
    <div className="multi-market">
      <div className="multi-market-container">

    
        <div className="empty-container">
          <p>No item added yet</p>
        </div>

        <div className="fixture-container">
          {multi &&
            multi.map((e) => (
              <div key={e.event_key} className="game-football">
                <div className="fixture-content">
                  <div className="match-time">
                    <h3>{e.event_time}</h3>
                  </div>
                  <div className="home-team-left-cover">
                    <div className="home-team">
                      <div className="logo">
                        <img src={e.home_team_logo} alt="logo" />
                      </div>
                      <div className="name">
                        <p>{e.event_home_team}</p>
                      </div>
                    </div>

                    <div className="home-team">
                      <div className="logo">
                        <img src={e.away_team_logo} alt="logo" />
                      </div>
                      <div className="name">
                        <p>{e.event_away_team}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            { multiOdd && multiOdd.map(()=>(

            <div  className="bet-football">
              <div className="home-team-right-cover">
                <div className="home-team-right-cover1">
                  <h3>1</h3>
                  <div className="home-team-right-odds">
                    <h3>7.55</h3>
                  </div>
                </div>
                <div className="home-team-right-cover1">
                  <h3>X</h3>
                  <div className="home-team-right-odds">
                    <h3>2.2</h3>
                  </div>
                </div>
                <div className="home-team-right-cover1">
                  <h3>2</h3>
                  <div className="home-team-right-odds">
                    <h3>1.12</h3>
                  </div>
                </div>
              </div>
            </div>
            )) }

        </div>

        
      </div>
    </div>
  );
}
