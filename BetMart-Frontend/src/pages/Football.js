import React from "react";
import "./styles/football.css";
import foot from "../images/Rectangle.png";
import Footer from "../components/Footer";
import "./styles/inplay.css";
import Countries from "../SportComponents/Football/Countries";
import Leagues from "../SportComponents/Football/Leagues";
import Fixtures from "../SportComponents/Football/Fixtures";
import { useState } from "react";


export default function Football({user, fetchData}) {
  const [ShowLeagues, setShowLeagues] = useState(false);
  const [passId, setPassId] = useState("");
  const [fixtureId] = useState("");

  const passedLeagues = (id) => {
    setShowLeagues(true);
    setPassId(id);
  };

  const fetchFixture = (id) => {
    console.log(id);
    // setFixuresId(id)
  };

  return (
    <div className="football_live_flex-cover">
      <div className="football_live_flex">
        <div className="football">
          <div className="football_head">
            <div className="football_image">
              <img src={foot} alt="football" />
            </div>
            <div className="football-highlight">
              <h3>HIGHLIGHT</h3>
            </div>
          </div>
          <Fixtures fixtureId={fixtureId} fetchData={fetchData} user={user} />
        </div>
        
        {ShowLeagues && <Leagues passId={passId} getFixture={fetchFixture} />}

        <Countries passLeagues={passedLeagues} />

      </div>
      <Footer />
    </div>
  );
}
