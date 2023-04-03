import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Countries({ passLeagues }) {
  const [countries, setCountries] = useState("");

  useEffect(() => {
    const HandleCountry = async () => {
      await axios
        .get(`https://betmartoffical.herokuapp.com/api/sport/country`)
        .then((response) => {
          setCountries(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    HandleCountry();
  }, []);

  // Post request to fetch league Api
  const ShowLeagues = async (id, sport) => {
    await axios
      .post(`https://betmartoffical.herokuapp.com/api/sport/cricket/league`, {
        sport_name: sport,
        countryId: id,
      })
      .then((response) => {
        passLeagues(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="soccer">
      <div className="soccer-container">
        <div className="soccer-header">
          <p>Countries</p>
        </div>

        {countries &&
          countries.map((country) => (
            <div className="countries-sports" key={country.country_key}>
              <div
                className="countries-sports-contents"
                onClick={() => ShowLeagues(country.country_key)}
              >
                <div className="logo">
                  <img src={country.country_logo} alt="" />
                </div>
                <div className="name">
                  <p> {country.country_name} </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
