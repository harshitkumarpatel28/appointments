import React from "react";

export const Tile = (props) => {

  const details = Object.values(props.description).map((info, index) => {
    return <p key={index} className="tile">{info}</p>;
  })

  return (
    <div className="tile-container">
      <p className="tile-title">{props.name}</p>
      {details}
    </div>
  );
};
