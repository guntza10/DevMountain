import React from "react";

function Banner({ img, title }) {
  return (
    <div className="bg-banner">
      <div className="banner">
        <img src={img} />
        <div className="rotated-banner"></div>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Banner;
