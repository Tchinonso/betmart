import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsStarHalf } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./index.css"


export default function Fixtures({ fixtureId }) {
  const [todaysGame, setTodaysGame] = useState("");

  useEffect(() => {
    const fetchSoccer = async () => {
      await axios
        .get(`https://betmartoffical.herokuapp.com/api/sport/tennis-fixture`)
        .then((response) => {
          setTodaysGame(response.data.game);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    fetchSoccer();
  }, []);


  return (
    <div className="fixtures">
    <div className="fixture-container">
      <div className="game-football">
        <div className="header">
        <div className="emp"></div>
          <div className="home">
             <h3>1</h3>
          </div>
          <div className="home">
             <h3>2</h3>
          </div>
        </div>
        {todaysGame &&
          todaysGame.map((league) => (
            <div key={league.event_key} id="fixture-contents">
              <div className="match-time">
                <h2>
                  <BsStarHalf />
                </h2>
                <h3>{league.event_time}</h3>
              </div>
              <div className="home-team-left-cover">
                <div className="home-team">
                  <div className="name">
                    <p>{league.event_first_player}</p>
                  </div>
                </div>

                <div className="home-team">
                  <div className="name">
                    <p>{league.event_second_player}</p>
                  </div>
                </div>
              </div>
              <div className="cricket-odds">
                <div className="home">
                  { league["Home/Away"].Home.bwin ?
                   <h4>{league["Home/Away"].Home.bwin}</h4> :
                   <p>---</p>
                  }
                </div>
                <div className="home">
                {league["Home/Away"].Away.bwin ?  
                  <h4>{league["Home/Away"].Away.bwin}</h4>
                    : <p>---</p> }
                </div>
              </div>
              <div className="view-more">
                  <button><MdOutlineKeyboardArrowRight /></button>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
  );
}
