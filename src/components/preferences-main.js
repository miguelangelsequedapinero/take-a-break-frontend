import progressBar from "../assets/Progress-bar-preferences.svg";
import PrimaryButton from "./primary-button";
import "../Activity.css";
import arrow from "../assets/Arrow.png";
import { Link } from "react-router-dom";
import HeaderRestart from "./header-restart";

import "./preferences-main.css";
import ToggleSwitch from "./toggle-switch";

function PreferencesMain({shortBreak, mediumBreak, longBreak}) {
  console.log(shortBreak)
  console.log(mediumBreak)
  console.log(longBreak)
  const preferences1 = ["Physical", "Mindful", "Indoor", "Guided", "Hype Up"]
  const preferences2 = ["Mental", "Mindless", "Outdoor", "Self led", "Calm down"]
  return (
    <div className="preference-page">
      <HeaderRestart />
      <div className="preferences-main-wrapper">
        <div className="preferences-main-row">
          <img
            className="preferences-main-wrapper__image"
            src={progressBar}
            alt="Progress bar"
          />
        </div>
        <h1>Choose a side for each prompt:</h1>
        <div className="preferences-main-row">
          <div className="preferences-main-row__content">
            {preferences1.map((p)=><div className="preferences-main-row__content__text">{p}</div>)}
          </div>
          <div className="preferences-main-row__content">
            <ToggleSwitch />
            <ToggleSwitch />
            <ToggleSwitch />
            <ToggleSwitch />
            <ToggleSwitch />
          </div>
          <div className="preferences-main-row__content">
          {preferences2.map((p)=><div className="preferences-main-row__content__text">{p}</div>)}
          </div>
        </div>
        <PrimaryButton text="Confirm preferences" />
      </div>
      <Link to="/step-three">
      <button className="back">
          <img src={arrow} style={{ width: "27px", height: "18px" }} />
          Back to last step
        </button>
      </Link>
    </div>
  );
}

export default PreferencesMain;
