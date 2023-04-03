import React from "react";
import { useState } from "react";
import './styles/myBets.css'

export default function MyBets() {

const [myBet] = useState('')

  return (
    <div className="mybet">
    <div className="mybet-container">
        <div className="mybet-header">
            <div className="contents">
              <h3> My Bets</h3>
            </div>
        </div>
       
        {!myBet && <div className="mybet-cont">
            <div className="mybet-contents">
            <h3 className="no-bet">No running bet</h3>
            </div>
         </div>}
        {
         myBet && <div className="mybet-cont">
            <h3 className="running">Running</h3>
                  
                  <div className="mybet-contents">
                     <div className="contents">
                        <div className="home-team">
                           <h4>Home Team vs Away Team</h4>
                        </div>
                        <div className="home-team">
                           <h4>Home win</h4>
                        </div>
                        <div className="home-team">
                           <h4>29'</h4>
                        </div>
                        <div className="home-team">
                           <h4>Stake: $20</h4>
                        </div>
                        <div className="home-team">
                           <h4>Wining: $60</h4>
                        </div>
                     </div>
                  </div>
         </div>
       
        }
    </div>
</div>
  );
}
