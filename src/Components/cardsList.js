import React from "react";
import Card from "./card";

function CardsList(props) {
  return (
    <div>
      {props.profiles.map((profile) => (
        <Card key={profile.id} {...profile} />
      ))}
    </div>
  );
}

export default CardsList;
