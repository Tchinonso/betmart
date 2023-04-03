import React from "react";
import { useState } from "react";
// import axios from "axios";
import bnbImg from "./images/BNB pari.svg";
import solImg from "./images/Solana.svg";
import nexoImg from "./images/Nexo.svg";
import usdcImg from "./images/USDCpari.svg";
import maticImg from "./images/MATIC pari.svg";
import btcImg from "./images/BTC pari.svg";
import ethImg from "./images/ETH pari.svg";
import usdtImg from "./images/USDT pari.svg";
import busdImg from "./images/BUSD pari.svg";

export default function Swap() {
  let withdraw = {
    sol: {
      image: solImg,
      name: "SOL",
    },
    nexo: {
      image: nexoImg,
      name: "NEXO",
    },
    bnb: {
      image: bnbImg,
      name: "BNB",
    },
    usdc: {
      image: usdcImg,
      name: "USDC",
    },
    matic: {
      image: maticImg,
      name: "MATIC",
    },
    btc: {
      image: btcImg,
      name: "BTC",
    },
    eth: {
      image: ethImg,
      name: "ETH",
    },
    usdt: {
      image: usdtImg,
      name: "USDT",
    },
    busd: {
      image: busdImg,
      name: "BUSD",
    },
  };

  const [displayCoinsIMg, setDisplayCoinImgs] = useState(withdraw.btc.image);
  const [, setStateNumber] = useState(6);
  const [currency, setDisplayCoinName] = useState(withdraw.btc.name);
  let [steps, setSteps] = useState(null);

  function specific(e) {
    if (e === 1) {
      setDisplayCoinImgs(withdraw.sol.image);
      setDisplayCoinName(withdraw.sol.name);
      setStateNumber(1);
    } else if (e === 2) {
      setDisplayCoinImgs(withdraw.nexo.image);
      setDisplayCoinName(withdraw.nexo.name);
      setStateNumber(2);
    } else if (e === 3) {
      setDisplayCoinImgs(withdraw.bnb.image);
      setDisplayCoinName(withdraw.bnb.name);
      setStateNumber(3);
    } else if (e === 4) {
      setDisplayCoinImgs(withdraw.usdc.image);
      setDisplayCoinName(withdraw.usdc.name);
      setStateNumber(4);
    } else if (e === 5) {
      setDisplayCoinImgs(withdraw.matic.image);
      setDisplayCoinName(withdraw.matic.name);
      setStateNumber(5);
    } else if (e === 6) {
      setDisplayCoinImgs(withdraw.btc.image);
      setDisplayCoinName(withdraw.btc.name);
      setStateNumber(6);
    } else if (e === 7) {
      setDisplayCoinImgs(withdraw.eth.image);
      setDisplayCoinName(withdraw.eth.name);
      setStateNumber(7);
    } else if (e === 8) {
      setDisplayCoinImgs(withdraw.usdt.image);
      setDisplayCoinName(withdraw.usdt.name);
      setStateNumber(8);
    } else if (e === 9) {
      setDisplayCoinImgs(withdraw.busd.image);
      setDisplayCoinName(withdraw.busd.name);
      setStateNumber(9);
    }
  }

  const showCoinDropDown = () => {
    if (steps) {
      setSteps(null);
    } else {
      setSteps(1);
    }
  };

  return (
    <div className="withdraw">
      <div className="withdraw-container">
        <div className="withdraw-content">
          <div className="input-contents">
            <label htmlFor="">Select coin to Swap from</label>
            <div onClick={showCoinDropDown} className="swap-container-coin">
              <div id="image">
                <img src={displayCoinsIMg} alt="" />
              </div>
              <div id="image">
                <h3>{currency}</h3>
              </div>
            </div>
            <h4 className="balance">Balance : $3000</h4>
          </div>

          {steps && (
            <div onClick={showCoinDropDown} className="swap-container">
              <div className="contents-all" onClick={() => specific(1)}>
                <div className="content-all">
                  <img src={solImg} alt="" />
                  <h3>SOL</h3>
                </div>
              </div>
              <div className="contents-all" onClick={() => specific(2)}>
                <div className="content-all">
                  <img src={nexoImg} alt="" />
                  <h3>Nexo</h3>
                </div>
              </div>

              <div className="contents-all" onClick={() => specific(3)}>
                <div className="content-all">
                  <img src={bnbImg} alt="" />
                  <h3>BNB</h3>
                </div>
              </div>

              <div className="contents-all" onClick={() => specific(4)}>
                <div className="content-all">
                  <img src={usdcImg} alt="" />
                  <h3>USDC</h3>
                </div>
              </div>

              <div className="contents-all" onClick={() => specific(5)}>
                <div className="content-all">
                  <img src={maticImg} alt="" />
                  <h3>MATIC</h3>
                </div>
              </div>

              <div className="contents-all" onClick={() => specific(6)}>
                <div className="content-all">
                  <img src={btcImg} alt="" />
                  <h3>BTC</h3>
                </div>
              </div>

              <div className="contents-all" onClick={() => specific(7)}>
                <div className="content-all">
                  <img src={ethImg} alt="" />
                  <h3>ETH</h3>
                </div>
              </div>

              <div className="contents-all" onClick={() => specific(8)}>
                <div className="content-all">
                  <img src={usdtImg} alt="" />
                  <h3>USDT</h3>
                </div>
              </div>

              <div className="contents-all" onClick={() => specific(9)}>
                <div className="content-all">
                  <img src={busdImg} alt="" />
                  <h3>BUSD</h3>
                </div>
              </div>
            </div>
          )}

          <div className="input-contents">
            <label htmlFor="">Swap amount in $usd</label>
            <div id="input-amount">
              <input type="number" placeholder="Enter Swap amount" />
            </div>
          </div>

          <div className="swap-withdraw-btn">
            <button>Swap</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
