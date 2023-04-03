import "./styles/tennis.css";
import ten from "../images/tennis main.svg";
import TennisFixtures from "../SportComponents/Tennis/TennisFixtures";
import Countries from "../SportComponents/Football/Countries";
import Footer from "../components/Footer";

export default function Tennis() {
  return (
    <div className="football_live_flex-cover">
    <div className="football_live_flex">
      <div className="football">
        <div className="football_head">
          <div className="football_image">
            <img src={ten} alt="football" />
          </div>
          <div className="football-highlight">
            <h3>HIGHLIGHT</h3>
          </div>
        </div>
        <TennisFixtures />
        {/* <Fixtures fixtureId={fixtureId} fetchData={fetchData} user={user} /> */}
      </div>
      {/* {ShowLeagues && <Leagues passId={passId} getFixture={fetchFixture} />} */}
      <Countries />
    </div>
    <Footer />
  </div>
  );
}
