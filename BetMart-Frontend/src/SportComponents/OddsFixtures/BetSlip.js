import React, { useState } from 'react'
import "./betslip.css"

export default function BetSlip({game}) {
    const [ gameOdd, setGameOdd ] = useState('')
   const handleSlip = ((e)=>{
        setGameOdd(e)
   })

  return (
    <div className='fixtures-odd-side'>
        <div className="fixtures-odd-side-container">
            <div className="header">
                <h4>Bet Slip</h4>
            </div>
            <div className="wining">
                <div className="state">
                    <h4>{game.state}</h4>
                </div>
                <div className="odd">
                    <h4>Odds</h4>
                </div>
                <div className="odd">
                    <h4>Stake</h4>
                </div>
                <div className="odd">
                    <h4>Liability</h4>
                </div>
            </div>
            <div className="team"><h4>{game.home} vs {game.away}</h4></div>
            <div className="bet-content">
                <div className="team-select">
                    <h2>{game.state}</h2>
                    <p>Odds</p>
                </div>
                <div className="team-odd">
                    <h4>{game.odd}</h4>
                </div>
                <div className="team-stake">
                    <input type="text" value={gameOdd} onChange={(e)=>setGameOdd(e.target.value)} />
                </div>
                <div className="liability">
                   <p>0</p>
                </div>
            </div>
            <div className="btn-add-odds">
                <div className="btn-add-odds-container">
                    <button onClick={()=>handleSlip(4)} >4</button>
                    <button onClick={()=>handleSlip(30)}>30</button>
                    <button onClick={()=>handleSlip(50)}>50</button>
                    <button onClick={()=>handleSlip(100)}>100</button>
                    <button onClick={()=>handleSlip(200)}>200</button>
                    <button onClick={()=>handleSlip(500)}>500</button>
                    <button onClick={()=>handleSlip(1000)}>1000</button>
                </div>
            </div>
        </div>
    </div>
  )
}
