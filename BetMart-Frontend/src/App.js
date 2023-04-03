import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inplay from "./pages/Inplay";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import SignUp from "./pages/SignUp";
import LiveMatch from "./InplayComponent/LiveMatch";
import SignUp2 from "./pages/SignUp2";
import { useAuthContext } from "./hooks/useAuthContext";
import HomeNavBar from "./components/HomeNavBar";
import Footer from "./components/Footer";
import Football from "./pages/Football";
import BetDisplay from "./pages/BetDisplay";
import Today from "./InplayComponent/Today";
import Tomorrow from "./InplayComponent/Tomorrow";
import Casino from "./pages/Casino";
import Tennis from "./pages/Tennis";
import Cricket from "./pages/Cricket";
import Profile from "./pages/Profile";
import Personal from "./pages/Personal";
import Account from "./pages/Account";
import Marquee from "react-fast-marquee";
import Multi from "./pages/Multimarket";
import MyBets from "./pages/MyBets";
import Transaction from "./pages/Transaction";
import Withdraw from "./Transactions/Withdraw";
import History from "./Transactions/History";
import Deposit from "./Transactions/Deposit";
import Swap from "./Transactions/Swap";
import Odds from "./SportComponents/OddsFixtures/Odds";
import axios from "axios"
import { useState } from "react";

function App() {
  const [ betMatch, setBetmatch ] = useState('')
  // This user will return null if user isn't logged in.
  const { user } = useAuthContext();
  const fetchMatch =(game_id)=>{
       axios.post('https://betmartoffical.herokuapp.com/api/sport/default-match',{
        game_id:game_id
      })
      .then((response)=>{
        setBetmatch(response.data.result[0])
      }).catch((error)=>{
          console.log(error)
      })
  }


  return (
    <BrowserRouter>
      <div className="App">
        {user ? <HomeNavBar /> : <NavBar />}
        <div className="news">
          <div className="news-head">
            <h4>News</h4>
          </div>
          <div className="news-details">
            <Marquee>
              Hello world,eioec kmwib jbigiwhx jhhvwigxwx heu9he9e jgwiwgxiw
              jdiwhuwhxow
            </Marquee>
          </div>
        </div>
      </div>

      <div className="mainscreen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/game-display" element={<BetDisplay />} />
          <Route path="/casino" element={<Casino />} />
          <Route path="/my-bet" element={<MyBets />} />

          <Route path="/inplay" element={<Inplay />}>
            <Route index element={<LiveMatch />} />
            <Route path="live-match" element={<LiveMatch />} />
            <Route path="today" element={<Today />} />
            <Route path="tomorrow" element={<Tomorrow />} />
          </Route>
          <Route path="football" element ={<Football fetchData={fetchMatch}  user={user} />}></Route>
          <Route path="football/odd"  element={<Odds bet={betMatch}  />} />

          <Route path="profile" element={<Profile />}>
            <Route index element={<Personal />} />
            <Route path="profile-details" element={<Personal />} />
            <Route path="account" element={<Account />} />
          </Route>

          <Route path="cricket" element={<Cricket />} />
          <Route path="multi-market" element={<Multi />} />
          <Route path="transaction" element={<Transaction />}>
            <Route index element={<History />} />
            <Route path="withdraw" element={<Withdraw />} />
            <Route path="history" element={<History />} />
            <Route path="deposit" element={<Deposit />} />
            <Route path="Swap" element={<Swap />} />
          </Route>
          <Route path="tennis" element={<Tennis />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
