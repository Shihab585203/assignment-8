import React from "react";
import "./Information.css";
import ProfileImg from "./shihab.png";

const Information = () => {
  return (
    <div className="informatin-list">
      <div className="d-flex align-items-center img-information">
        <img className="img-fluid rounded-circle w-25" src={ProfileImg} alt="" />
        <div className="mt-4">
          <h4>Shihab Ahmed</h4>
          <p>Sydney, Australia</p>
        </div>
      </div>
      <div className="details">
        <div>
          <h3>75kg</h3>
          <p>Weight</p>
        </div>
        <div>
          <h3>6.5</h3>
          <p>Height</p>
        </div>
        <div>
          <h3>25</h3>
          <p>Age</p>
        </div>
      </div>
    </div>
  );
};

export default Information;
