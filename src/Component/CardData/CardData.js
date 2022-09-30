import React from "react";

const CardData = (props) => {
  const { title, description, img, time } = props.yoga;

  return (
    <div className="col">
      <div class="card">
        <img class="card-img-top" src={img} alt="" />
        <div class="card-body">
          <h3>{title}</h3>
          <p class="card-text text-muted">{description}</p>
          <p>Time Required: {time}</p>
          <div className="row row-cols-12 px-2">
            <a href="/" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardData;
