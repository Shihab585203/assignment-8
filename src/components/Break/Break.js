import React, { useEffect, useState } from "react";
import "./Break.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Break = ({ list }) => {
  let times = 0;
  for (const time of list) {
    times = parseFloat(times + time.time);
  }
  const [seconds, setSeconds] = useState([]);
  //break value
  const [breakTime, setBreakTime] = useState(0);


  useEffect(() => {
    fetch("data2.json")
      .then((res) => res.json())
      .then((data) => setSeconds(data));
  }, []);
  console.log(seconds);
  //Toast Functions
  const notify = () =>{
    toast.success('Activity Has been completed!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  
  //Break value function

  const breakSec = (e) =>{
    const value = e.currentTarget.value;
    setBreakTime(value);
  }
    
  return (
    <div className="informatin-list">
      <h4 className="my-4">Add A Break</h4>
      <div className="button">
        <button onClick={breakSec} value='10' className=" flex-button">
          <p className="btn-p">10s</p>
        </button>
        <button onClick={breakSec} value='20' className=" flex-button">
          <p>20s</p>
        </button>
        <button onClick={breakSec} value='30'  className=" flex-button">
          <p>30s</p>
        </button>
        <button onClick={breakSec} value='40'  className=" flex-button">
          <p>40s</p>
        </button>
        <button onClick={breakSec} value='50'  className=" flex-button">
          <p>50s</p>
        </button>
      </div>
      <div className="mt-5">
        <h4 className="">Exercise Details</h4>
        <h5 className="my-4 time">Exercise time: {times} seconds </h5>
        <h5 className="time">Break time : {breakTime} Seconds</h5>
      </div>
      <button onClick={notify} className="btn-cart mt-5">
        <h5 className="btn-text">Activity Completed</h5>
      </button>
      <ToastContainer />



      








    </div>
  );
};

export default Break;
