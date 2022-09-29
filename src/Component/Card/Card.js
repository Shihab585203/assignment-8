import React, { useEffect, useState } from "react";
import CardData from "../CardData/CardData";

const Card = () => {
  const [yogas, setYogas] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setYogas(data));
  }, []);

  return (
    <div className="card-wrapper container row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
      {yogas.map((yoga) => (
        <CardData yoga={yoga}></CardData>
      ))}
    </div>
  );
};



export default Card;
