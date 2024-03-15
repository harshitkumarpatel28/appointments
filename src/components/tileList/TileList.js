import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {

  
  let list = [];
  let count = 0;
  props.contacts.map((contact, index) => {
    
    const { name: name, ...description } = contact

    list.push(<Tile key={index} name={name} description={description}  />);
  })

  return (
    <div>
      {list}
    </div>
  );
};
