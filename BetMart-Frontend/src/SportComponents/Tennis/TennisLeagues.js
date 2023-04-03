import React from "react";
import axios from "axios";
// import { useState, useEffect } from "react";

export default function Leagues({ passId, getFixture }) {
  const passfixtures = async (sport, id) => {
    await axios
      .post(`https://betmartoffical.herokuapp.com/api/sport/fixture`, {
        sport_name: sport,
        leagueId: id,
      })
      .then((response) => {
        getFixture(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Leagues">
      <div className="soccer-container">
        <div className="soccer-header">
          <p>Leagues</p>
        </div>
        {passId &&
          passId.map((League) => (
            <div className="countries-sports" key={League.league_key}>
              <div
                className="countries-sports-contents"
                onClick={() => passfixtures(League.league_key)}
              >
                <div className="logo">
                  <img src={League.league_logo} alt="" />
                </div>
                <div className="name">
                  <p> {League.league_name} </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
