// import React, { useState } from "react";
import "./styles/cricket.css";
import cricket_image from "../images/cricket_image.svg";

import CricketFixtures from "../SportComponents/Cricket/CricketFixtures";
import Countries from "../SportComponents/Football/Countries";
import Footer from "../components/Footer";

export default function Cricket() {
  return (
      <div className="football_live_flex-cover">
      <div className="football_live_flex">
        <div className="football">
          <div className="football_head">
            <div className="football_image">
            <img src={cricket_image} alt="cricket" />
            </div>
            <div className="football-highlight">
              <h3>HIGHLIGHT</h3>
            </div>
          </div>
          <CricketFixtures />
          {/* <Fixtures fixtureId={fixtureId} fetchData={fetchData} user={user} /> */}
        </div>
        {/* {ShowLeagues && <Leagues passId={passId} getFixture={fetchFixture} />} */}

        <Countries />
      </div>
      <Footer />
    </div>
  );
}
