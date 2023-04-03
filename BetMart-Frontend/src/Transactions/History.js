import React from 'react'
import "./style/styles.css"
import { useState } from 'react'
export default function History() {

  const [ history ] = useState('')

  return (
    <div className='history'>
      <div className="history-container">

      { !history && <div className="noHistory">
          <h3>No transaction</h3>
        </div>}

        { history &&
          <div className="history-contents">
            <div className="history-details">
                <h3 className='deposit' >Deposit</h3>
            </div>
            <div className="history-details">
                <h3 className='deposit-amount'>-$20</h3>
            </div>
            <div className="history-details">
                <h3>23/3/3033</h3>
            </div>
            <div className="history-details">
                <h3>Bitcoin</h3>
            </div>
            <div className="history-details">
                <h3 className='deposit-amount'>successful</h3>
            </div>
          </div> }
      </div>
    </div>
  )
}
