import React from "react";
import profile from "./shihab.png";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Exercise from "../Exercise/Exercise";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="d-flex align-items-center mt-4">
        <img className="w-25 rounded-circle" src={profile} alt="" />
        <div className="text-white">
          <h4>Shihab Ahmed</h4>
          <p>
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Cumilla,
            Bangladesh
          </p>
        </div>
      </div>

      <div className="profile-details d-flex row-cols-3 g-4 text-white text-center p-3 me-4 mt-4 rounded-3">
        <div className="">
          <article className="fs-3">
            57<span className="fs-5">kg</span>
          </article>
          <span>Weight</span>
        </div>

        <div className="">
          <article className="fs-3">6.3</article>
          <span>Height</span>
        </div>

        <div className="">
          <article className="fs-3">
            35
            <span className="fs-5">Yrs</span>
          </article>
          <span>Age</span>
        </div>
      </div>

      {/* Exercise Details */}
      <Exercise></Exercise>


    </div>
  );
};

export default Sidebar;
