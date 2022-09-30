import React from 'react';
import './Exercise.css'

const Exercise = () => {
    return (
        <div>
           <h3 className='mt-4 text-white'>Add A Break</h3>

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
        </div>
    );
};

export default Exercise;