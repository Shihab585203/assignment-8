import React from "react";
import "./Exercise.css";

const Exercise = () => {
  return (
    <div>
      <h3 className="mt-4 text-white">Add A Break</h3>

      <div className="profile-details exercise-time d-flex row-cols-5 g-4 text-white text-center p-4 me-4 mt-4 rounded-3">
        <button className="btn btn-primary rounded-circle">10s</button>
        <button className="btn btn-primary rounded-circle">20s</button>
        <button className="btn btn-primary rounded-circle">30s</button>
        <button className="btn btn-primary rounded-circle">40s</button>
        <button className="btn btn-primary rounded-circle">50s</button>
      </div>

      
    </div>
  );
};

export default Exercise;
