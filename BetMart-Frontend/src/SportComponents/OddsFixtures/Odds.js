import React, {useState} from 'react'
import './fixturesodd.css'
import { useLocation } from 'react-router-dom'
import BetSlip from './BetSlip'

export default function Odds() {

    const [ gameEl, setGameEl ] = useState('')
    const { state } = useLocation()

    const handleGame = ((home, away, odd, state)=>{
        const data = { home, away, odd, state }
        setGameEl(data)
    })
    console.log(state)

return (
    <div className='fixtures-odd'>
        <div className="fixtures-odd-container">
            <div className="fixtures-odd-head">
                <div className="home-team-select">
                    <div className="name">
                        <h4>{state.event_home_team}</h4>
                    </div>
                    <div className="logo">
                        <img src={state.home_team_logo} alt="" />
                    </div>
                </div>
                <div className="draw-game">
                    <h4>Draw</h4>
                </div>
                <div className="home-team-select">
                    <div className="logo">
                    <img src={state.away_team_logo} alt="" />
                    </div>
                    <div className="name">
                        <h4>{state.event_away_team}</h4>
                    </div>
                </div>
            </div>
            <div className="first-odd">
                <div className="first-odd-container">
                    <div className="first-odd-content">
                        <h4>1</h4>
                        <h4 onClick={()=>handleGame(state.event_home_team, state.event_away_team, state.odd_1, "Home Win" )} >{state.odd_1}</h4>
                    </div>
                    <div className="first-odd-content">
                        <h4>x</h4>
                        <h4 onClick={()=>handleGame(state.event_home_team, state.event_away_team, state.odd_x, "Draw" )} >{state.odd_x}</h4>
                    </div>
                    <div className="first-odd-content">
                        <h4>2</h4>
                        <h4 onClick={()=>handleGame(state.event_home_team, state.event_away_team, state.odd_2, "Away" )}  >{state.odd_2}</h4>
                    </div>
                </div>
                <div className="first-odd-container">
                    <div className="first-odd-content">
                        <h4>1x</h4>
                        <h4 onClick={()=>handleGame(state.event_home_team, state.event_away_team, state.odd_1, "Home Win" )} >{state.odd_1x}</h4>
                    </div>
                    <div className="first-odd-content">
                        <h4>12</h4>
                        <h4 onClick={()=>handleGame(state.event_home_team, state.event_away_team, state.odd_x, "Draw" )} >{state.odd_12}</h4>
                    </div>
                    <div className="first-odd-content">
                        <h4>x2</h4>
                        <h4 onClick={()=>handleGame(state.event_home_team, state.event_away_team, state.odd_2, "Away" )}  >{state.odd_x2}</h4>
                    </div>
                </div>
                <div className="first-odd-container">
                    <div className="first-odd-content">
                        <h4>Over 0.5</h4>
                        <h4 onClick={()=>handleGame(state.event_home_team, state.event_away_team, state["o+0.5"], "Over 0.5" )} >{state["o+0.5"]}</h4>
                    </div>
                    <div className="first-odd-content">
                        <h4>Under 0.5</h4>
                        <h4 onClick={()=>handleGame(state.event_home_team, state.event_away_team, state["u+0.5"], "Under 0.5" )} >{state["u+0.5"]}</h4>
                    </div>
                    <div className="first-odd-content">
                        <h4>Over 1.5</h4>
                        <h4 onClick={()=>handleGame(state.event_home_team, state.event_away_team, state["o+1.5"], "Over 1.5" )} >{state["o+1.5"]}</h4>
                    </div>
                    <div className="first-odd-content">
                        <h4>Under 1.5</h4>
                        <h4 onClick={()=>handleGame(state.event_home_team, state.event_away_team, state["u+1.5"], "Under 1.5" )}  >{state["u+1.5"]}</h4>
                    </div>
                </div>

                <div className="first-odd-container">
                    <div className="first-odd-content">
                        <h4>Over 2.5</h4>
                        <h4 onClick={()=>handleGame(state.event_home_team, state.event_away_team, state["o+2.5"], "Over 2.5" )} >{state["o+2.5"]}</h4>
                    </div>
                    <div className="first-odd-content">
                        <h4>Under 2.5</h4>
                        <h4 onClick={()=>handleGame(state.event_home_team, state.event_away_team, state["u+2.5"], "Under 2.5" )} >{state["u+2.5"]}</h4>
                    </div>
                </div>

                <div className="first-odd-container">
                    <div className="first-odd-content">
                        <h4>Over 3.5</h4>
                        <h4 onClick={()=>handleGame(state.event_home_team, state.event_away_team, state["o+3.5"], "Over 3.5" )} >{state["o+3.5"]}</h4>
                    </div>
                    <div className="first-odd-content">
                        <h4>Under 3.5</h4>
                        <h4 onClick={()=>handleGame(state.event_home_team, state.event_away_team, state["u+3.5"], "Under 3.5" )} >{state["u+3.5"]}</h4>
                    </div>
                </div>

                <div className="first-odd-container">
                    <div className="first-odd-content">
                        <h4>Over 4.5</h4>
                        <h4 onClick={()=>handleGame(state.event_home_team, state.event_away_team, state["o+4.5"], "Over 4.5" )} >{state["o+4.5"]}</h4>
                    </div>
                    <div className="first-odd-content">
                        <h4>Under 4.5</h4>
                        <h4 onClick={()=>handleGame(state.event_home_team, state.event_away_team, state["u+4.5"], "Under 4.5" )} >{state["u+4.5"]}</h4>
                    </div>
                </div>
                <div className="first-odd-container">
                    <div className="first-odd-content">
                        <h4>Over 5.5</h4>
                        <h4 onClick={()=>handleGame(state.event_home_team, state.event_away_team, state["o+5.5"], "Over 5.5" )} >{state["o+5.5"]}</h4>
                    </div>
                    <div className="first-odd-content">
                        <h4>Under 5.5</h4>
                        <h4 onClick={()=>handleGame(state.event_home_team, state.event_away_team, state["u+5.5"], "Under 5.5" )} >{state["u+5.5"]}</h4>
                    </div>
                </div>
            </div>
        </div>
        <BetSlip game={gameEl} />
    </div>
  )
}
