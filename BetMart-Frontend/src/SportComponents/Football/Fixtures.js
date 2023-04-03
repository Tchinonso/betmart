import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsStarHalf } from "react-icons/bs";

export default function Fixtures({ user, fetchData }) {
  const [todaysGame, setTodaysGame] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    const fetchSoccer = async () => {
      await axios
        .get(`https://betmartoffical.herokuapp.com/api/sport/fixture`)
        .then((response) => {
          setTodaysGame(response.data.result);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    fetchSoccer();
  },[]);

  const handleNavigate = ((e)=>{
    // fetchData(e)
    navigate('/football/odd',{
      state: e
    })
  })


  const handleStar = async (id, type) => {
    await axios.post(
        "https://betmartoffical.herokuapp.com/api/bet/multi-slip",
        {
          game_id: id,
          game_type: type,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.Token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="fixtures">
      <div className="fixture-container">
        <div className="game-football">
          <div className="game-football-header">
              <div className="content">
                <div className="team">
                </div>
                <div className="major">
                    <h3>1 X 2</h3>
                </div>  
                <div className="double-odd">
                    <div className="h3">Double Chance</div>
                </div>
                <div className="over-odd">
                    <h3>Over/under (2.5)</h3>
                </div>
                <div className="view-more">
                      <h3> </h3>
                </div>
              </div>
          </div>
          <div className="game-football-header2">
              <div className="content">
                <div className="team">   
                </div>
                <div className="major">
                    <div className="home_t">
                      <h4>1</h4>
                    </div>
                    <div className="home_t">
                      <h4>x</h4>
                    </div>
                    <div className="home_t">
                      <h4>2</h4>
                    </div>
                </div>  
                <div className="major">
                    <div className="home_t">
                      <h4>1x</h4>
                    </div>
                    <div className="home_t">
                      <h4>12</h4>
                    </div>
                    <div className="home_t">
                      <h4>x2</h4>
                    </div>
                </div>  
                <div className="over-odd">
                  <div className="home_t">
                    <h4>Over</h4>
                  </div>
                  <div className="home_t">
                    <h4>Under</h4>
                  </div>
                </div>
                <div className="view-more">
                      <h3> More </h3>
                </div>
              </div>
          </div>

      { todaysGame && todaysGame.map((league) => (
            <div  key={league.event_key}  className="game-football-main">
              <div className="content">
               <div className="team">
                <div className="time-section">
                  <BsStarHalf onClick={()=>handleStar(league.event_key, "football")} />
                  <h4>{league.event_time}</h4>
                  <h4>{league.event_status}</h4>
                </div>
                <div className="team-section">
                    <div className="image">
                      <img src={league.home_team_logo} width='20px' alt="" />
                  </div>
                    <div className="name">
                       <h3>{league.event_home_team}</h3>
                    </div>
                      <h3>-</h3>
                      <div className="image">
                       <img src={league.away_team_logo} width='20px' alt="" />
                      </div>
                      <div className="name">
                        <h3>{league.event_away_team}</h3>
                      </div>
                  </div>
              </div>
              <div className="major">
                  <div className="home_t">
                    <button>{league.odd_1 ? league.odd_1 : <p>---</p> }</button>
                  </div>
                  <div className="home_t">
                      <button>{league.odd_x ? league.odd_x : <p>---</p> } </button>
                  </div>
                  <div className="home_t">
                    <button>{league.odd_2 ? league.odd_2 : <p>--</p> } </button>
                  </div>
              </div>  
              <div className="major">
                  <div className="home_t">
                  <button>{league.odd_1x ? league.odd_1x : <p>---</p> }</button>
                  </div>
                  <div className="home_t">
                    <button>{league.odd_12 ? league.odd_12 : <p>---</p> }</button>
                  </div>
                  <div className="home_t">
                    <button>{league.odd_x2 ? league.odd_x2: <p>---</p> }</button>
                  </div>
              </div>  
              <div className="over-odd">
                  <div className="home_t">
                    <button>{league["o+2.5"] ? league["o+2.5"]: <p>---</p> }</button>
                  </div>
                  <div className="home_t">
                    <button>{league["u+2.5"] ? league["u+2.5"]: <p>---</p> }</button>
                  </div>
              </div>
              <div className="view-more" onClick={() => handleNavigate(league)} >
                  <button><MdOutlineKeyboardArrowRight /> </button> 
              </div>
            </div>
          </div>
          ))}       
        </div>
      </div>
    </div>
  );
}